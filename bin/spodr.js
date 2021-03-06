#!/usr/bin/env node

"use strict";

const errors = require( "../lib/errors" );
const log    = require( "fm-log" ).module();

const app = require( "../lib/app" );
app.boot()
	.then( () => {
		return app.start();
	} )
	.catch( errors.SpodrError, error => {
		log.error( error.message );
	} );
