import * as dotenv from 'dotenv'
dotenv.config()

const dev = {
	app:{
		serverPort: process.env.SERVER_PORT || 3003 // if there is no SERVER_PORT then 3002 will be used
	},
	db:{
        url: process.env.DB_URL
    }
}

export default dev