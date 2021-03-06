"use strict";

const BaseTask   = require( "./_task" );
const GitWrapper = require( "./../git/git" );

class PushTask extends BaseTask {
	// eslint-disable-next-line no-useless-constructor
	constructor( repository, config ) {
		super( repository, config );
	}

	process() {
		this.git = new GitWrapper( this.repoPath );
		this.git.prefix( this.repository.name );

		if( this.repository.push === undefined || this.repository.push === true ) {
			return this.git.push();
		} else {
			return null;
		}
	}
}

function taskFactory( folder ) {
	const task = new PushTask( folder );
	return task.process();
}

module.exports = taskFactory;
