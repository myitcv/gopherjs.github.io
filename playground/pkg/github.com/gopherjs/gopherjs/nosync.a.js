p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �7>��#github.com/gopherjs/gopherjs/nosyncnosync�0package nosync
type @"".Mutex struct { @"".locked bool }
func (? *@"".Mutex) @"".Lock() ()
func (? *@"".Mutex) @"".Unlock() ()
type @"".Once struct { @"".doing bool; @"".done bool }
func (? *@"".Once) @"".Do(@"".f func () ()) ()
type @"".Pool struct { @"".store []interface {  }; @"".New func () (? interface {  }) }
func (? *@"".Pool) @"".Get() (? interface {  })
func (? *@"".Pool) @"".Put(@"".x interface {  }) ()
type @"".RWMutex struct { @"".writeLocked bool; @"".readLockCounter int }
func (? *@"".RWMutex) @"".Lock() ()
func (? *@"".RWMutex) @"".RLock() ()
func (? *@"".RWMutex) @"".RUnlock() ()
func (? *@"".RWMutex) @"".Unlock() ()
type @"".WaitGroup struct { @"".counter int }
func (? *@"".WaitGroup) @"".Add(@"".delta int) ()
func (? *@"".WaitGroup) @"".Done() ()
func (? *@"".WaitGroup) @"".Wait() ()
$$
Mutex[0]��	Mutex[0] = $pkg.Mutex = $newType(0, $kindStruct, "nosync.Mutex", "Mutex", "github.com/gopherjs/gopherjs/nosync", function(locked_) {
		this.$val = this;
		this.locked = locked_ !== undefined ? locked_ : false;
	});
��	ptrType.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
u	Mutex[0].init([{prop: "locked", name: "locked", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}]);
Mutex)github.com/gopherjs/gopherjs/nosync.Mutex+github.com/gopherjs/gopherjs/nosync.ptrType 
RWMutex[0]�V	RWMutex[0] = $pkg.RWMutex = $newType(0, $kindStruct, "nosync.RWMutex", "RWMutex", "github.com/gopherjs/gopherjs/nosync", function(writeLocked_, readLockCounter_) {
		this.$val = this;
		this.writeLocked = writeLocked_ !== undefined ? writeLocked_ : false;
		this.readLockCounter = readLockCounter_ !== undefined ? readLockCounter_ : 0;
	});
�;	ptrType$1.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}, {prop: "RLock", name: "RLock", pkg: "", typ: $funcType([], [], false)}, {prop: "RUnlock", name: "RUnlock", pkg: "", typ: $funcType([], [], false)}];
��	RWMutex[0].init([{prop: "writeLocked", name: "writeLocked", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}, {prop: "readLockCounter", name: "readLockCounter", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Int, tag: ""}]);
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex-github.com/gopherjs/gopherjs/nosync.ptrType$1 WaitGroup[0]��	WaitGroup[0] = $pkg.WaitGroup = $newType(0, $kindStruct, "nosync.WaitGroup", "WaitGroup", "github.com/gopherjs/gopherjs/nosync", function(counter_) {
		this.$val = this;
		this.counter = counter_ !== undefined ? counter_ : 0;
	});
��	ptrType$2.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [], false)}, {prop: "Wait", name: "Wait", pkg: "", typ: $funcType([], [], false)}];
z	WaitGroup[0].init([{prop: "counter", name: "counter", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Int, tag: ""}]);
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.ptrType$2 Once[0]�
	Once[0] = $pkg.Once = $newType(0, $kindStruct, "nosync.Once", "Once", "github.com/gopherjs/gopherjs/nosync", function(doing_, done_) {
		this.$val = this;
		this.doing = doing_ !== undefined ? doing_ : false;
		this.done = done_ !== undefined ? done_ : false;
	});
a	ptrType$3.methods = [{prop: "Do", name: "Do", pkg: "", typ: $funcType([funcType], [], false)}];
��	Once[0].init([{prop: "doing", name: "doing", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}, {prop: "done", name: "done", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}]);
Once(github.com/gopherjs/gopherjs/nosync.Once,github.com/gopherjs/gopherjs/nosync.funcType-github.com/gopherjs/gopherjs/nosync.ptrType$3 Pool[0]�	Pool[0] = $pkg.Pool = $newType(0, $kindStruct, "nosync.Pool", "Pool", "github.com/gopherjs/gopherjs/nosync", function(store_, New_) {
		this.$val = this;
		this.store = store_ !== undefined ? store_ : sliceType.nil;
		this.New = New_ !== undefined ? New_ : $throwNilPointerError;
	});
��	ptrType$4.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Put", name: "Put", pkg: "", typ: $funcType([$emptyInterface], [], false)}];
��	Pool[0].init([{prop: "store", name: "store", pkg: "github.com/gopherjs/gopherjs/nosync", typ: sliceType, tag: ""}, {prop: "New", name: "New", pkg: "", typ: funcType$1, tag: ""}]);
Pool(github.com/gopherjs/gopherjs/nosync.Pool.github.com/gopherjs/gopherjs/nosync.funcType$1-github.com/gopherjs/gopherjs/nosync.ptrType$4-github.com/gopherjs/gopherjs/nosync.sliceType ptrType	ptrType = $ptrType(Mutex[0]);
ptrType)github.com/gopherjs/gopherjs/nosync.Mutex 	ptrType$1#	ptrType$1 = $ptrType(RWMutex[0]);
	ptrType$1+github.com/gopherjs/gopherjs/nosync.RWMutex 	ptrType$2%	ptrType$2 = $ptrType(WaitGroup[0]);
	ptrType$2-github.com/gopherjs/gopherjs/nosync.WaitGroup funcType&	funcType = $funcType([], [], false);
funcType 	ptrType$3 	ptrType$3 = $ptrType(Once[0]);
	ptrType$3(github.com/gopherjs/gopherjs/nosync.Once 	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType 	ptrType$4 	ptrType$4 = $ptrType(Pool[0]);
	ptrType$4(github.com/gopherjs/gopherjs/nosync.Pool 
funcType$17	funcType$1 = $funcType([], [$emptyInterface], false);

funcType$1 1(*github.com/gopherjs/gopherjs/nosync.Mutex).Lock�,	Mutex[0].ptr.prototype.Lock = function() {
		var $ptr, m;
		$ptr = {};
   �		m[0] = this;
   �    		if (m[0].locked) {
   �			$panic(new $String("nosync: mutex is already locked"));
    		}
   �		m[0].locked = true;
    	};
	Mutex[0].prototype.Lock = function() { return this.$val.Lock(); };
Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.Mutex).Unlock�5	Mutex[0].ptr.prototype.Unlock = function() {
		var $ptr, m;
		$ptr = {};
  P		m[0] = this;
  f    		if (!m[0].locked) {
  w			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �		m[0].locked = false;
    	};
	Mutex[0].prototype.Unlock = function() { return this.$val.Unlock(); };
Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.RWMutex).Lock�b	RWMutex[0].ptr.prototype.Lock = function() {
		var $ptr, rw;
		$ptr = {};
  �		rw[0] = this;
  �    		if (!((rw[0].readLockCounter === 0)) || rw[0].writeLocked) {
  �			$panic(new $String("nosync: mutex is already locked"));
    		}
  			rw[0].writeLocked = true;
    	};
	RWMutex[0].prototype.Lock = function() { return this.$val.Lock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 5(*github.com/gopherjs/gopherjs/nosync.RWMutex).Unlock�G	RWMutex[0].ptr.prototype.Unlock = function() {
		var $ptr, rw;
		$ptr = {};
  �		rw[0] = this;
  �    		if (!rw[0].writeLocked) {
  �			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �		rw[0].writeLocked = false;
    	};
	RWMutex[0].prototype.Unlock = function() { return this.$val.Unlock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.RWMutex).RLock�k	RWMutex[0].ptr.prototype.RLock = function() {
		var $ptr, rw;
		$ptr = {};
  e		rw[0] = this;
  }    		if (rw[0].writeLocked) {
  �			$panic(new $String("nosync: mutex is already locked"));
    		}
  �  �		rw[0].readLockCounter = rw[0].readLockCounter + (1) >> 0;
        	};
	RWMutex[0].prototype.RLock = function() { return this.$val.RLock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 6(*github.com/gopherjs/gopherjs/nosync.RWMutex).RUnlock�|	RWMutex[0].ptr.prototype.RUnlock = function() {
		var $ptr, rw;
		$ptr = {};
  l		rw[0] = this;
  �    		if (rw[0].readLockCounter === 0) {
  �			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �  �		rw[0].readLockCounter = rw[0].readLockCounter - (1) >> 0;
        	};
	RWMutex[0].prototype.RUnlock = function() { return this.$val.RUnlock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Add��	WaitGroup[0].ptr.prototype.Add = function(delta[0]) {
		var $ptr, delta, wg;
		$ptr = {};
  �		wg[0] = this;
  �  �		wg[0].counter = wg[0].counter + (delta[0]) >> 0;
      �    		if (wg[0].counter < 0) {
  �			$panic(new $String("sync: negative WaitGroup counter"));
    		}
    	};
	WaitGroup[0].prototype.Add = function(delta[0]) { return this.$val.Add(delta[0]); };
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Done��	WaitGroup[0].ptr.prototype.Done = function() {
		var $ptr, wg;
		$ptr = {};
  Y		wg[0] = this;
  r		wg[0].Add(-1);
    	};
	WaitGroup[0].prototype.Done = function() { return this.$val.Done(); };
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Wait�)	WaitGroup[0].ptr.prototype.Wait = function() {
		var $ptr, wg;
		$ptr = {};
  �		wg[0] = this;
  �    		if (!((wg[0].counter === 0))) {
  �			$panic(new $String("sync: WaitGroup counter not zero"));
    		}
    	};
	WaitGroup[0].prototype.Wait = function() { return this.$val.Wait(); };
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup .(*github.com/gopherjs/gopherjs/nosync.Once).Do�N	Once[0].ptr.prototype.Do = function $blocking_Do(f[0]) {
		var $deferred, $ptr, $r, $s, f, o;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $ptr = $f.$ptr; f = $f.f; o = $f.o; $deferred = $f.$deferred; $s = $f.$s; $r = $f.$r; } var $err = null; try { if($deferred === undefined) { $deferred = []; } $deferFrames.push($deferred); s: while (true) { switch ($s) { case 0:
		$ptr = {};
  �		o[0] = this;
  �    		if (o[0].done) {
  �			return;
    		}
  �    		if (o[0].doing) {
  �			$panic(new $String("nosync: Do called within f"));
    		}
  �		o[0].doing = true;
  		$deferred.push([(function() {
			var $ptr;
			$ptr = {};
  			o[0].doing = false;
  1			o[0].done = true;
    		}), []]);
  E		$r = f[0](); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* */ case -1: } return; } } catch(err) { $err = err; $s = -1; } finally { $deferFrames.pop(); if (!$curGoroutine.asleep || $skippedDeferFrames > 0) { $callDeferred($deferred, $err); } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: $blocking_Do }; } $f.$ptr = $ptr; $f.f = f; $f.o = o; $f.$deferred = $deferred; $f.$s = $s; $f.$r = $r; return $f; } }
	};
	Once[0].prototype.Do = function(f[0]) { return this.$val.Do(f[0]); };
Once(github.com/gopherjs/gopherjs/nosync.Once /(*github.com/gopherjs/gopherjs/nosync.Pool).Get��	Pool[0].ptr.prototype.Get = function $blocking_Get() {
		var $ptr, $r, $s, _r, p, x, x$1, x$2;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $ptr = $f.$ptr; p = $f.p; _r = $f._r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		$ptr = {};
  f		p[0] = this;
  �		/* */ if (p[0].store.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p[0].store.$length === 0) { */ case 1:
  �			/* */ if (!(p[0].New === $throwNilPointerError)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!(p[0].New === $throwNilPointerError)) { */ case 3:
  �				_r = p[0].New(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				return _r;
    			/* } */ case 4:
  �			return $ifaceNil;
    		/* } */ case 2:
  �		x$2[0] = (x = p[0].store, x$1 = p[0].store.$length - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? $throwRuntimeError("index out of range") : x.$array[x.$offset + x$1]));
  �		p[0].store = $subslice(p[0].store, 0, (p[0].store.$length - 1 >> 0));
  		return x$2[0];
    		/* */ case -1: } return; } if ($f === undefined) { $f = { $blk: $blocking_Get }; } $f.$ptr = $ptr; $f.p = p; $f._r = _r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pool[0].prototype.Get = function() { return this.$val.Get(); };
Pool(github.com/gopherjs/gopherjs/nosync.Pool /(*github.com/gopherjs/gopherjs/nosync.Pool).Put�1	Pool[0].ptr.prototype.Put = function(x[0]) {
		var $ptr, p, x;
		$ptr = {};
  E		p[0] = this;
  d    		if ($interfaceIsEqual(x[0], $ifaceNil)) {
  t			return;
    		}
  		p[0].store = $append(p[0].store, x[0]);
    	};
	Pool[0].prototype.Put = function(x[0]) { return this.$val.Put(x[0]); };
Pool(github.com/gopherjs/gopherjs/nosync.Pool ��{"Base":5279,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/mutex.go","Base":1,"Size":2073,"Lines":[0,15,16,59,79,92,94,95,159,184,199,242,245,262,264,265,329,356,372,416,419,437,439,440,485,507,529,550,552,553,653,681,729,772,775,798,800,801,891,921,943,987,990,1014,1016,1017,1118,1147,1168,1211,1214,1236,1238,1239,1381,1412,1442,1486,1489,1511,1513,1514,1561,1585,1598,1600,1601,1702,1740,1761,1782,1826,1829,1831,1832,1874,1904,1916,1918,1919,1972,2002,2024,2068,2071],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/once.go","Base":2075,"Size":1072,"Lines":[0,15,16,75,94,106,118,120,121,190,253,271,349,423,473,476,553,629,677,730,733,780,783,859,881,884,914,927,936,939,953,991,994,1010,1026,1044,1060,1065,1070],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/pool.go","Base":3148,"Size":2130,"Lines":[0,15,16,91,105,108,188,265,295,298,363,366,440,517,597,612,615,687,761,838,862,865,942,1021,1091,1105,1108,1188,1267,1347,1361,1364,1383,1404,1430,1432,1433,1501,1540,1600,1675,1706,1709,1780,1812,1847,1871,1891,1909,1913,1926,1929,1959,1995,2005,2007,2008,2035,2071,2086,2095,2098,2128],"Infos":null}]}
 