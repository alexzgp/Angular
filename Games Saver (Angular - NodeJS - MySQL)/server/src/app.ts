import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

export class App {

    public app: Application; 

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.routes();
        this.middlewares()
    }

    settings(): void {
        this.app.set('port', this.port || process.env.PORT || 3001);
        this.app.use(cors());
        this.app.use(express.json());
        // this.app.use(express.urlencoded({extended: false}));
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
            console.log(`Server on port`, this.app.get('port'))
    }
}

const app = new App();
app.listen();