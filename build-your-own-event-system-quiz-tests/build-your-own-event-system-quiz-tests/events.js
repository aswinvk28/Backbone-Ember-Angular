// Create your own Event Tracker system:
//
// 1. create an `EventTracker` object
//    • it should accept a name when constructed
// 2. extend the `EventTracker` prototype with:
//    • an `on` method
//    • a `notify` method
//    • a `trigger` method
//
// EXAMPLE:
// function purchase(item) { console.log( 'purchasing ' + item); }
// function celebrate() { console.log( this.name + ' says birthday parties are awesome!' ); }
//
// var nephewParties = new EventTracker( 'nephews ');
// var richard = new EventTracker( 'Richard' );
//
// nephewParties.on( 'mainEvent', purchase );
// richard.on( 'mainEvent', celebrate );
// nephewParties.notify( richard, 'mainEvent' );
//
// nephewParties.trigger( 'mainEvent', 'ice cream' );
//

function EventTracker(name)
{
    this.name = name;
    this._events = {};
    this._notify = {};
}

EventTracker.prototype.on = function(event, callback) {
    if (!this._events.hasOwnProperty(event)) {
		this._events[event] = [];
	}
	this._events[event].push(callback);
};

EventTracker.prototype.notify = function(object, event) {
    if (!this._notify.hasOwnProperty(event)) {
		this._notify[event] = [];
	}
	this._notify[event].push(object);
};

EventTracker.prototype.trigger = function(event, arg1) {
    var i = 0;
	if (this._events.hasOwnProperty(event)) {
		for(i=0; i<this._events[event].length; i++) {
			this._events[event][i].call(this, arg1);
		}
	}
	if (this._notify.hasOwnProperty(event)) {
		for(i=0; i<this._notify[event].length; i++) {
			this._notify[event][i].trigger(event, arg1);
		}
	}
};