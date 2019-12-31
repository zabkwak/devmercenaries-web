import Server from 'reacting-squirrel/server';

const app = new Server({
	cookies: {
		secure: false,
	},
	dev: true,
	port: 8080,
});

app.start((err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	// tslint:disable-next-line: no-console
	console.log(new Date(), 'App started');
});
