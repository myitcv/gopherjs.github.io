p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �@���github.com/gopherjs/gopherjs/jsjs�xpackage js
func @"".Debugger() ()
type @"".Error struct { ? *@"".Object }
func (? *@"".Error) @"".Error() (? string)
func (? *@"".Error) @"".Stack() (? string)
var @"".Global *@"".Object
func @"".InternalObject(@"".i interface {  }) (? *@"".Object)
func @"".Keys(@"".o *@"".Object) (? []string)
type @"".M map[string]interface {  }
func @"".MakeFunc(? func (@"".this *@"".Object, @"".arguments []*@"".Object) (? interface {  })) (? *@"".Object)
func @"".MakeWrapper(@"".i interface {  }) (? *@"".Object)
var @"".Module *@"".Object
func @"".NewArrayBuffer(@"".b []byte) (? *@"".Object)
type @"".Object struct { @"".object *@"".Object }
func (? *@"".Object) @"".Bool() (? bool)
func (? *@"".Object) @"".Call(@"".name string, @"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Delete(@"".key string) ()
func (? *@"".Object) @"".Float() (? float64)
func (? *@"".Object) @"".Get(@"".key string) (? *@"".Object)
func (? *@"".Object) @"".Index(@"".i int) (? *@"".Object)
func (? *@"".Object) @"".Int() (? int)
func (? *@"".Object) @"".Int64() (? int64)
func (? *@"".Object) @"".Interface() (? interface {  })
func (? *@"".Object) @"".Invoke(@"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Length() (? int)
func (? *@"".Object) @"".New(@"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Set(@"".key string, @"".value interface {  }) ()
func (? *@"".Object) @"".SetIndex(@"".i int, @"".value interface {  }) ()
func (? *@"".Object) @"".String() (? string)
func (? *@"".Object) @"".Uint64() (? uint64)
func (? *@"".Object) @"".Unsafe() (? uintptr)
type @"".S []interface {  }
var @"".Undefined *@"".Object
$$
'	Object[0]��	Object[0] = $pkg.Object = $newType(0, $kindStruct, "js.Object", "Object", "github.com/gopherjs/gopherjs/js", function(object_) {
		this.$val = this;
		this.object = object_ !== undefined ? object_ : null;
	});
��	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType], [ptrType], true)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Int64", name: "Int64", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Unsafe", name: "Unsafe", pkg: "", typ: $funcType([], [$Uintptr], false)}];
t	Object[0].init([{prop: "object", name: "object", pkg: "github.com/gopherjs/gopherjs/js", typ: ptrType, tag: ""}]);
Object&github.com/gopherjs/gopherjs/js.Object'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.sliceType Error[0]��	Error[0] = $pkg.Error = $newType(0, $kindStruct, "js.Error", "Error", "github.com/gopherjs/gopherjs/js", function(Object_) {
		this.$val = this;
		this.Object = Object_ !== undefined ? Object_ : null;
	});
��	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Stack", name: "Stack", pkg: "", typ: $funcType([], [$String], false)}];
N	Error[0].init([{prop: "Object", name: "", pkg: "", typ: ptrType, tag: ""}]);
Error%github.com/gopherjs/gopherjs/js.Error'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.ptrType$1 M[0]^	M[0] = $pkg.M = $newType(4, $kindMap, "js.M", "M", "github.com/gopherjs/gopherjs/js", null);
&	M[0].init($String, $emptyInterface);
M!github.com/gopherjs/gopherjs/js.M S[0]a	S[0] = $pkg.S = $newType(12, $kindSlice, "js.S", "S", "github.com/gopherjs/gopherjs/js", null);
	S[0].init($emptyInterface);
S!github.com/gopherjs/gopherjs/js.S 	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1 ptrType 	ptrType = $ptrType(Object[0]);
ptrType&github.com/gopherjs/gopherjs/js.Object sliceType$2$	sliceType$2 = $sliceType(ptrType);
sliceType$2'github.com/gopherjs/gopherjs/js.ptrType funcType7	funcType = $funcType([sliceType$2], [ptrType], true);
funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2 	ptrType$1!	ptrType$1 = $ptrType(Error[0]);
	ptrType$1%github.com/gopherjs/gopherjs/js.Error 		$pkg.Global = null;
Global&github.com/gopherjs/gopherjs/js.Global 		$pkg.Module = null;
Module&github.com/gopherjs/gopherjs/js.Module 		$pkg.Undefined = null;
	Undefined)github.com/gopherjs/gopherjs/js.Undefined -(*github.com/gopherjs/gopherjs/js.Object).Get��	Object[0].ptr.prototype.Get = function(key[0]) {
		var $ptr, key, o;
		$ptr = {};
  	�		o[0] = this;
  	�		return o[0].object[$externalize(key[0], $String)];
    	};
	Object[0].prototype.Get = function(key[0]) { return this.$val.Get(key[0]); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Set�A	Object[0].ptr.prototype.Set = function(key[0], value[0]) {
		var $ptr, key, o, value;
		$ptr = {};
  
e		o[0] = this;
  
�		o[0].object[$externalize(key[0], $String)] = $externalize(value[0], $emptyInterface);
    	};
	Object[0].prototype.Set = function(key[0], value[0]) { return this.$val.Set(key[0], value[0]); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Delete�	Object[0].ptr.prototype.Delete = function(key[0]) {
		var $ptr, key, o;
		$ptr = {};
  
�		o[0] = this;
  		delete o[0].object[$externalize(key[0], $String)];
    	};
	Object[0].prototype.Delete = function(key[0]) { return this.$val.Delete(key[0]); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Length��	Object[0].ptr.prototype.Length = function() {
		var $ptr, o;
		$ptr = {};
  u		o[0] = this;
  �		return $parseInt(o[0].object.length);
    	};
	Object[0].prototype.Length = function() { return this.$val.Length(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Index��	Object[0].ptr.prototype.Index = function(i[0]) {
		var $ptr, i, o;
		$ptr = {};
  �		o[0] = this;
  		return o[0].object[i[0]];
    	};
	Object[0].prototype.Index = function(i[0]) { return this.$val.Index(i[0]); };
Object&github.com/gopherjs/gopherjs/js.Object 2(*github.com/gopherjs/gopherjs/js.Object).SetIndex�/	Object[0].ptr.prototype.SetIndex = function(i[0], value[0]) {
		var $ptr, i, o, value;
		$ptr = {};
  S		o[0] = this;
  �		o[0].object[i[0]] = $externalize(value[0], $emptyInterface);
    	};
	Object[0].prototype.SetIndex = function(i[0], value[0]) { return this.$val.SetIndex(i[0], value[0]); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Object).Call�a	Object[0].ptr.prototype.Call = function(name[0], args[0]) {
		var $ptr, args, name, o, obj;
		$ptr = {};
  �		o[0] = this;
  		return (obj = o[0].object, obj[$externalize(name[0], $String)].apply(obj, $externalize(args[0], sliceType)));
    	};
	Object[0].prototype.Call = function(name[0], args[0]) { return this.$val.Call(name[0], args[0]); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType 0(*github.com/gopherjs/gopherjs/js.Object).Invoke�	Object[0].ptr.prototype.Invoke = function(args[0]) {
		var $ptr, args, o;
		$ptr = {};
  �		o[0] = this;
  �		return o[0].object.apply(undefined, $externalize(args[0], sliceType));
    	};
	Object[0].prototype.Invoke = function(args[0]) { return this.$val.Invoke(args[0]); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType -(*github.com/gopherjs/gopherjs/js.Object).New�A	Object[0].ptr.prototype.New = function(args[0]) {
		var $ptr, args, o;
		$ptr = {};
  S		o[0] = this;
  �		return new ($global.Function.prototype.bind.apply(o[0].object, [undefined].concat($externalize(args[0], sliceType))));
    	};
	Object[0].prototype.New = function(args[0]) { return this.$val.New(args[0]); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType .(*github.com/gopherjs/gopherjs/js.Object).Bool��	Object[0].ptr.prototype.Bool = function() {
		var $ptr, o;
		$ptr = {};
  �		o[0] = this;
  		return !!(o[0].object);
    	};
	Object[0].prototype.Bool = function() { return this.$val.Bool(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).String��	Object[0].ptr.prototype.String = function() {
		var $ptr, o;
		$ptr = {};
  �		o[0] = this;
  �		return $internalize(o[0].object, $String);
    	};
	Object[0].prototype.String = function() { return this.$val.String(); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Int��	Object[0].ptr.prototype.Int = function() {
		var $ptr, o;
		$ptr = {};
  1		o[0] = this;
  H		return $parseInt(o[0].object) >> 0;
    	};
	Object[0].prototype.Int = function() { return this.$val.Int(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Int64��	Object[0].ptr.prototype.Int64 = function() {
		var $ptr, o;
		$ptr = {};
  �		o[0] = this;
  �		return $internalize(o[0].object, $Int64);
    	};
	Object[0].prototype.Int64 = function() { return this.$val.Int64(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Uint64��	Object[0].ptr.prototype.Uint64 = function() {
		var $ptr, o;
		$ptr = {};
  m		o[0] = this;
  �		return $internalize(o[0].object, $Uint64);
    	};
	Object[0].prototype.Uint64 = function() { return this.$val.Uint64(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Float��	Object[0].ptr.prototype.Float = function() {
		var $ptr, o;
		$ptr = {};
  		o[0] = this;
  1		return $parseFloat(o[0].object);
    	};
	Object[0].prototype.Float = function() { return this.$val.Float(); };
Object&github.com/gopherjs/gopherjs/js.Object 3(*github.com/gopherjs/gopherjs/js.Object).Interface��	Object[0].ptr.prototype.Interface = function() {
		var $ptr, o;
		$ptr = {};
  �		o[0] = this;
  �		return $internalize(o[0].object, $emptyInterface);
    	};
	Object[0].prototype.Interface = function() { return this.$val.Interface(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Unsafe��	Object[0].ptr.prototype.Unsafe = function() {
		var $ptr, o;
		$ptr = {};
  l		o[0] = this;
  �		return o[0].object;
    	};
	Object[0].prototype.Unsafe = function() { return this.$val.Unsafe(); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Error).Error�	Error[0].ptr.prototype.Error = function() {
		var $ptr, err;
		$ptr = {};
  �		err[0] = this;
  �		return "JavaScript error: " + $internalize(err[0].Object.message, $String);
    	};
	Error[0].prototype.Error = function() { return this.$val.Error(); };
Error%github.com/gopherjs/gopherjs/js.Error .(*github.com/gopherjs/gopherjs/js.Error).Stack��	Error[0].ptr.prototype.Stack = function() {
		var $ptr, err;
		$ptr = {};
  _		err[0] = this;
  }		return $internalize(err[0].Object.stack, $String);
    	};
	Error[0].prototype.Stack = function() { return this.$val.Stack(); };
Error%github.com/gopherjs/gopherjs/js.Error (github.com/gopherjs/gopherjs/js.DebuggerDebugger[0]N	Debugger[0] = $pkg.Debugger = function() {
		var $ptr;
		$ptr = {};
    	};
Debugger(github.com/gopherjs/gopherjs/js.Debugger .github.com/gopherjs/gopherjs/js.InternalObjectInternalObject[0]u	InternalObject[0] = $pkg.InternalObject = function(i[0]) {
		var $ptr, i;
		$ptr = {};
  �		return null;
    	};
InternalObject.github.com/gopherjs/gopherjs/js.InternalObject (github.com/gopherjs/gopherjs/js.MakeFuncMakeFunc[0]n	MakeFunc[0] = $pkg.MakeFunc = function(param) {
		var $ptr, param;
		$ptr = {};
  �		return null;
    	};
MakeFunc(github.com/gopherjs/gopherjs/js.MakeFunc $github.com/gopherjs/gopherjs/js.KeysKeys[0]�`	Keys[0] = $pkg.Keys = function(o[0]) {
		var $ptr, a, i, o, s;
		$ptr = {};
  $    		if (o[0] === null || o[0] === undefined) {
  F			return sliceType$1.nil;
    		}
  U		a[0] = $global.Object.keys(o[0]);
  �		s[0] = $makeSlice(sliceType$1, $parseInt(a[0].length));
  �  �		i[0] = 0;
		while (true) {
			if (!(i[0] < $parseInt(a[0].length))) { break; }
  �			((i[0] < 0 || i[0] >= s[0].$length) ? $throwRuntimeError("index out of range") : s[0].$array[s[0].$offset + i[0]] = $internalize(a[0][i[0]], $String));
      �  �			i[0] = i[0] + (1) >> 0;
    		}
  �		return s[0];
    	};
Keys$github.com/gopherjs/gopherjs/js.Keys+github.com/gopherjs/gopherjs/js.sliceType$1 +github.com/gopherjs/gopherjs/js.MakeWrapperMakeWrapper[0]��	MakeWrapper[0] = $pkg.MakeWrapper = function(i[0]) {
		var $ptr, i, i$1, m, methods, o, v;
		$ptr = {};
  �		v[0] = i[0];
  �		o[0] = new ($global.Object)();
  �		methods[0] = v[0].constructor.methods;
  /  3		i$1[0] = 0;
		while (true) {
			if (!(i$1[0] < $parseInt(methods[0].length))) { break; }
			m[0] = [undefined];
  Y			m[0] = methods[0][i$1[0]];
  q    			if (!($internalize(m[0].pkg, $String) === "")) {
  �  Q  Q				i$1[0] = i$1[0] + (1) >> 0;
    				continue;
    			}
  �			o[0][$externalize($internalize(m[0].name, $String), $String)] = $externalize((function(m) { return function(args[0]) {
				var $ptr, args;
				$ptr = {};
  �				return $externalize(v[0][$externalize($internalize(m[0].prop, $String), $String)], m[0].typ).apply(v[0], $externalize(args[0], sliceType$2));
    			}; })(m), funcType);
      Q  Q			i$1[0] = i$1[0] + (1) >> 0;
    		}
  e		return o[0];
    	};
MakeWrapper+github.com/gopherjs/gopherjs/js.MakeWrapper&github.com/gopherjs/gopherjs/js.Object(github.com/gopherjs/gopherjs/js.funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2 .github.com/gopherjs/gopherjs/js.NewArrayBufferNewArrayBuffer[0]�M	NewArrayBuffer[0] = $pkg.NewArrayBuffer = function(b[0]) {
		var $ptr, b, length, offset, slice;
		$ptr = {};
  �		slice[0] = b[0];
  �		offset[0] = $parseInt(slice[0].$offset) >> 0;
  "		length[0] = $parseInt(slice[0].$length) >> 0;
  H		return slice[0].$array.buffer.slice(offset[0], offset[0] + length[0] >> 0);
    	};
NewArrayBuffer.github.com/gopherjs/gopherjs/js.NewArrayBuffer $github.com/gopherjs/gopherjs/js.initinit[0]h	init[0] = function() {
		var $ptr, e;
		$ptr = {};
  �		e[0] = new Error[0].ptr(null);
  �    	};
    		init[0]();
%github.com/gopherjs/gopherjs/js.Error$github.com/gopherjs/gopherjs/js.init ��{"Base":7903,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/js/js.go","Base":1,"Size":7901,"Lines":[0,203,206,334,337,425,513,601,689,777,865,953,1041,1129,1217,1305,1393,1481,1569,1657,1745,1833,1921,2009,2012,2148,2159,2160,2418,2455,2456,2513,2583,2584,2654,2735,2736,2796,2857,2858,2926,2985,2986,3033,3100,3101,3148,3232,3233,3288,3392,3393,3468,3557,3558,3660,3743,3744,3831,3887,3888,3979,4041,4042,4138,4191,4192,4292,4351,4352,4454,4516,4517,4621,4682,4683,4775,4848,4849,4965,5028,5029,5180,5200,5209,5211,5212,5286,5321,5380,5382,5383,5464,5499,5533,5535,5536,5629,5648,5649,5798,5817,5818,5871,5893,5894,5959,5978,5979,6084,6129,6141,6143,6144,6253,6330,6342,6344,6345,6402,6434,6467,6480,6483,6526,6559,6594,6623,6626,6636,6638,6639,6810,6852,6876,6909,6957,6998,7022,7073,7085,7089,7153,7259,7264,7267,7277,7279,7280,7350,7390,7418,7456,7494,7573,7575,7576,7677,7707,7708,7810,7831,7832,7846,7878,7892,7899],"Infos":null}]}
 