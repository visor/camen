(function() {
	var
		camen,
		__c = function() {},
		extend = function (members, statics) {
			var child = inherits(this, members, statics);
			child.extend = this.extend;
			return child;
		},
		inherits = function(parent, members, statics) {
			var child;

			if (members && members.hasOwnProperty('constructor')) {
				child = members.constructor;
			} else {
				child = function(){ parent.apply(this, arguments); };
			}

			extend(child, parent);
			__c.prototype = parent.prototype;
			child.prototype = new __c();

			if (members) {
				extend(child.prototype, members)
			};
			if (statics) {
				extend(child, statics);
			}

			child.prototype.constructor = child;
			child.__super__ = parent.prototype;
			return child;
		};
	;

	camen.VERSION = '0.0.1';
}).call(this);