����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �f���database/sql/driverdrivererrorsfmtreflectstrconvtime��
$$ exports $$
pv0driver&database/sql/driver0BoolboolType  String 8    ConvertValue 8src   
Value     6 ColumnConverter  ColumnConverter idx ValueConverter  ConvertValue v   B 6    Conn  
Begin   Tx  Commit   6 Rollback   6   6 
Close   6 Prepare 
query  Stmt  
Close   6 Exec argsB Result  LastInsertId   
 6 RowsAffected   
 6   6 NumInput    
Query argsB Rows  
Close   6 Columns     Next destB 6   6   6  2DefaultParameterConverter defaultConverter  ConvertValue �v   B 6 Driver  Open name  T 6  ErrBadConn6ErrSkip6Execer  Exec 
query argsB p 6  
Int32int32Type  ConvertValue �v   B 6 	IsScanValue v     	IsValue v     NotNull ConverterL ConvertValuen�v   B 6 Null ConverterL ConvertValuen�v   B 6 Queryer  
Query 
query argsB ~ 6  pResultNoRowsnoRows  LastInsertId �  
 6 RowsAffected �  
 6 ~RowsAffected 
LastInsertId �  
 6 RowsAffectedv�  
 6 fStringstringType  ConvertValue �v   B 6 ZBLValuer  
Value   B 6  8AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["fmt"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["reflect"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["strconv"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["time"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FZF=$pkg.Value=$newType(8,$kindInterface,"driver.Value","Value","database/sql/driver",null);F.init([]);Valuedatabase/sql/driver.Value G]G=$pkg.Driver=$newType(8,$kindInterface,"driver.Driver","Driver","database/sql/driver",null);UG.init([{prop:"Open",name:"Open",pkg:"",typ:$funcType([$String],[J,$error],false)}]);Driverdatabase/sql/driver.Conndatabase/sql/driver.Driver H]H=$pkg.Execer=$newType(8,$kindInterface,"driver.Execer","Execer","database/sql/driver",null);XH.init([{prop:"Exec",name:"Exec",pkg:"",typ:$funcType([$String,AD],[K,$error],false)}]);Execerdatabase/sql/driver.ADdatabase/sql/driver.Execerdatabase/sql/driver.Resultdatabase/sql/driver.Value I`I=$pkg.Queryer=$newType(8,$kindInterface,"driver.Queryer","Queryer","database/sql/driver",null);ZI.init([{prop:"Query",name:"Query",pkg:"",typ:$funcType([$String,AD],[N,$error],false)}]);Queryerdatabase/sql/driver.ADdatabase/sql/driver.Queryerdatabase/sql/driver.Rows JWJ=$pkg.Conn=$newType(8,$kindInterface,"driver.Conn","Conn","database/sql/driver",null);��J.init([{prop:"Begin",name:"Begin",pkg:"",typ:$funcType([],[O,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Prepare",name:"Prepare",pkg:"",typ:$funcType([$String],[L,$error],false)}]);Conndatabase/sql/driver.Conndatabase/sql/driver.Stmtdatabase/sql/driver.Tx K]K=$pkg.Result=$newType(8,$kindInterface,"driver.Result","Result","database/sql/driver",null);��K.init([{prop:"LastInsertId",name:"LastInsertId",pkg:"",typ:$funcType([],[$Int64,$error],false)},{prop:"RowsAffected",name:"RowsAffected",pkg:"",typ:$funcType([],[$Int64,$error],false)}]);Resultdatabase/sql/driver.Result LWL=$pkg.Stmt=$newType(8,$kindInterface,"driver.Stmt","Stmt","database/sql/driver",null);�$L.init([{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Exec",name:"Exec",pkg:"",typ:$funcType([AD],[K,$error],false)},{prop:"NumInput",name:"NumInput",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Query",name:"Query",pkg:"",typ:$funcType([AD],[N,$error],false)}]);Stmtdatabase/sql/driver.ADdatabase/sql/driver.Resultdatabase/sql/driver.Rowsdatabase/sql/driver.Stmt MxM=$pkg.ColumnConverter=$newType(8,$kindInterface,"driver.ColumnConverter","ColumnConverter","database/sql/driver",null);aM.init([{prop:"ColumnConverter",name:"ColumnConverter",pkg:"",typ:$funcType([$Int],[R],false)}]);ColumnConverter#database/sql/driver.ColumnConverter"database/sql/driver.ValueConverter NWN=$pkg.Rows=$newType(8,$kindInterface,"driver.Rows","Rows","database/sql/driver",null);��N.init([{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Columns",name:"Columns",pkg:"",typ:$funcType([],[AE],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([AD],[$error],false)}]);Rowsdatabase/sql/driver.ADdatabase/sql/driver.AEdatabase/sql/driver.Rows OQO=$pkg.Tx=$newType(8,$kindInterface,"driver.Tx","Tx","database/sql/driver",null);��O.init([{prop:"Commit",name:"Commit",pkg:"",typ:$funcType([],[$error],false)},{prop:"Rollback",name:"Rollback",pkg:"",typ:$funcType([],[$error],false)}]);Txdatabase/sql/driver.Tx PkP=$pkg.RowsAffected=$newType(8,$kindInt64,"driver.RowsAffected","RowsAffected","database/sql/driver",null);��P.methods=[{prop:"LastInsertId",name:"LastInsertId",pkg:"",typ:$funcType([],[$Int64,$error],false)},{prop:"RowsAffected",name:"RowsAffected",pkg:"",typ:$funcType([],[$Int64,$error],false)}];RowsAffected database/sql/driver.RowsAffected Q��Q=$pkg.noRows=$newType(0,$kindStruct,"driver.noRows","noRows","database/sql/driver",function(){this.$val=this;if(arguments.length===0){return;}});��Q.methods=[{prop:"LastInsertId",name:"LastInsertId",pkg:"",typ:$funcType([],[$Int64,$error],false)},{prop:"RowsAffected",name:"RowsAffected",pkg:"",typ:$funcType([],[$Int64,$error],false)}];Q.init([]);noRowsdatabase/sql/driver.noRows RuR=$pkg.ValueConverter=$newType(8,$kindInterface,"driver.ValueConverter","ValueConverter","database/sql/driver",null);mR.init([{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}]);ValueConverterdatabase/sql/driver.Value"database/sql/driver.ValueConverter S]S=$pkg.Valuer=$newType(8,$kindInterface,"driver.Valuer","Valuer","database/sql/driver",null);PS.init([{prop:"Value",name:"Value",pkg:"",typ:$funcType([],[F,$error],false)}]);Valuerdatabase/sql/driver.Valuedatabase/sql/driver.Valuer T��T=$pkg.boolType=$newType(0,$kindStruct,"driver.boolType","boolType","database/sql/driver",function(){this.$val=this;if(arguments.length===0){return;}});��T.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}];T.init([]);boolTypedatabase/sql/driver.Valuedatabase/sql/driver.boolType U��U=$pkg.int32Type=$newType(0,$kindStruct,"driver.int32Type","int32Type","database/sql/driver",function(){this.$val=this;if(arguments.length===0){return;}});oU.methods=[{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}];U.init([]);	int32Typedatabase/sql/driver.Valuedatabase/sql/driver.int32Type V��V=$pkg.stringType=$newType(0,$kindStruct,"driver.stringType","stringType","database/sql/driver",function(){this.$val=this;if(arguments.length===0){return;}});oV.methods=[{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}];V.init([]);
stringTypedatabase/sql/driver.Valuedatabase/sql/driver.stringType W��W=$pkg.Null=$newType(0,$kindStruct,"driver.Null","Null","database/sql/driver",function(Converter_){this.$val=this;if(arguments.length===0){this.Converter=$ifaceNil;return;}this.Converter=Converter_;});oW.methods=[{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}];BW.init([{prop:"Converter",name:"Converter",pkg:"",typ:R,tag:""}]);Nulldatabase/sql/driver.Nulldatabase/sql/driver.Value"database/sql/driver.ValueConverter X��X=$pkg.NotNull=$newType(0,$kindStruct,"driver.NotNull","NotNull","database/sql/driver",function(Converter_){this.$val=this;if(arguments.length===0){this.Converter=$ifaceNil;return;}this.Converter=Converter_;});oX.methods=[{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}];BX.init([{prop:"Converter",name:"Converter",pkg:"",typ:R,tag:""}]);NotNulldatabase/sql/driver.NotNulldatabase/sql/driver.Value"database/sql/driver.ValueConverter AA��AA=$pkg.defaultConverter=$newType(0,$kindStruct,"driver.defaultConverter","defaultConverter","database/sql/driver",function(){this.$val=this;if(arguments.length===0){return;}});pAA.methods=[{prop:"ConvertValue",name:"ConvertValue",pkg:"",typ:$funcType([$emptyInterface],[F,$error],false)}];AA.init([]);defaultConverterdatabase/sql/driver.Value$database/sql/driver.defaultConverter ABAB=$sliceType($Uint8);AB ACAC=$sliceType($emptyInterface);AC ADAD=$sliceType(F);ADdatabase/sql/driver.Value AEAE=$sliceType($String);AE ErrSkip 
ErrBadConn $pkg.ResultNoRows=new Q.ptr();ResultNoRows database/sql/driver.ResultNoRowsdatabase/sql/driver.noRows $pkg.Bool=new T.ptr();Booldatabase/sql/driver.Booldatabase/sql/driver.boolType $pkg.Int32=new U.ptr();Int32database/sql/driver.Int32database/sql/driver.int32Type $pkg.String=new V.ptr();Stringdatabase/sql/driver.Stringdatabase/sql/driver.stringType ,$pkg.DefaultParameterConverter=new AA.ptr();DefaultParameterConverter-database/sql/driver.DefaultParameterConverter$database/sql/driver.defaultConverter P    $pkg.ErrSkip=A.New("driver: skip fast-path; continue as if unimplemented");database/sql/driver.ErrSkip
errors.New 5    $pkg.ErrBadConn=A.New("driver: bad connection");database/sql/driver.ErrBadConn
errors.New     _     _     _     _     _ /(database/sql/driver.RowsAffected).LastInsertId��P.prototype.LastInsertId=function(){var $ptr;  return[new $Int64(0,0),A.New("no LastInsertId available")];    };$ptrType(P).prototype.LastInsertId=function(){return this.$get().LastInsertId();};RowsAffected database/sql/driver.RowsAffected
errors.New /(database/sql/driver.RowsAffected).RowsAffected��P.prototype.RowsAffected=function(){var $ptr,a;  Ia=this;  zreturn[new $Int64(a.$high,a.$low),$ifaceNil];    };$ptrType(P).prototype.RowsAffected=function(){return this.$get().RowsAffected();};RowsAffected database/sql/driver.RowsAffected )(database/sql/driver.noRows).LastInsertId��Q.ptr.prototype.LastInsertId=function(){var $ptr;  �return[new $Int64(0,0),A.New("no LastInsertId available after DDL statement")];    };Q.prototype.LastInsertId=function(){return this.$val.LastInsertId();};noRowsdatabase/sql/driver.noRows
errors.New )(database/sql/driver.noRows).RowsAffected��Q.ptr.prototype.RowsAffected=function(){var $ptr;  7return[new $Int64(0,0),A.New("no RowsAffected available after DDL statement")];    };Q.prototype.RowsAffected=function(){return this.$val.RowsAffected();};noRowsdatabase/sql/driver.noRows
errors.New %(database/sql/driver.boolType).String~T.ptr.prototype.String=function(){var $ptr;  !Mreturn"Bool";    };T.prototype.String=function(){return this.$val.String();};boolTypedatabase/sql/driver.boolType +(database/sql/driver.boolType).ConvertValue��T.ptr.prototype.ConvertValue=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !�b=a;if($assertType(b,$Bool,true)[1]){$s=1;continue;}if($assertType(b,$String,true)[1]){$s=2;continue;}if($assertType(b,AB,true)[1]){$s=3;continue;}$s=4;continue;    case 1:    c=b.$val;  !�return[new $Bool(c),$ifaceNil];    case 2:    d=b.$val;  !�f=D.ParseBool(d);g=f[0];h=f[1];  "if(!($interfaceIsEqual(h,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  "i=B.Errorf("sql/driver: couldn't convert %q into type bool",new AC([new $String(d)]));$s=7;case 7:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=8;case 8:return[$ifaceNil,i];    case 6:  "ireturn[new $Bool(g),$ifaceNil];    case 3:    e=b.$val;  "�j=D.ParseBool($bytesToString(e));k=j[0];l=j[1];  "�if(!($interfaceIsEqual(l,$ifaceNil))){$s=9;continue;}$s=10;continue;    case 9:  "�m=B.Errorf("sql/driver: couldn't convert %q into type bool",new AC([e]));$s=11;case 11:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}$s=12;case 12:return[$ifaceNil,m];    case 10:  #return[new $Bool(k),$ifaceNil];    case 4:  #(n=C.ValueOf(a);$s=13;case 13:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=n;    p=o.Kind();  #Xif((p===(2))||(p===(3))||(p===(4))||(p===(5))||(p===(6))){$s=15;continue;}if((p===(7))||(p===(8))||(p===(9))||(p===(10))||(p===(11))){$s=16;continue;}$s=17;continue;    case 15:  #�q=o.Int();    if((q.$high===0&&q.$low===1)||(q.$high===0&&q.$low===0)){  #�return[new $Bool((q.$high===0&&q.$low===1)),$ifaceNil];    }  #�r=B.Errorf("sql/driver: couldn't convert %d into type bool",new AC([q]));$s=18;case 18:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}$s=19;case 19:return[$ifaceNil,r];    case 16:  $�s=o.Uint();    if((s.$high===0&&s.$low===1)||(s.$high===0&&s.$low===0)){  $�return[new $Bool((s.$high===0&&s.$low===1)),$ifaceNil];    }  $�t=B.Errorf("sql/driver: couldn't convert %d into type bool",new AC([s]));$s=20;case 20:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}$s=21;case 21:return[$ifaceNil,t];    case 17:    case 14:  %(u=B.Errorf("sql/driver: couldn't convert %v (%T) into type bool",new AC([a,a]));$s=22;case 22:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}$s=23;case 23:return[$ifaceNil,u];    }return;}if($f===undefined){$f={$blk:T.ptr.prototype.ConvertValue};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};boolTypedatabase/sql/driver.ABdatabase/sql/driver.ACdatabase/sql/driver.boolType
fmt.Errorfreflect.ValueOfstrconv.ParseBool ,(database/sql/driver.int32Type).ConvertValue�	�U.ptr.prototype.ConvertValue=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &�b=C.ValueOf(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;    d=c.Kind();  &�if((d===(2))||(d===(3))||(d===(4))||(d===(5))||(d===(6))){$s=3;continue;}if((d===(7))||(d===(8))||(d===(9))||(d===(10))||(d===(11))){$s=4;continue;}if(d===(24)){$s=5;continue;}$s=6;continue;    case 3:  &�e=c.Int();  'if((e.$high>0||(e.$high===0&&e.$low>2147483647))||(e.$high<-1||(e.$high===-1&&e.$low<2147483648))){$s=7;continue;}$s=8;continue;    case 7:  ';f=B.Errorf("sql/driver: value %d overflows int32",new AC([a]));$s=9;case 9:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=10;case 10:return[$ifaceNil,f];    case 8:  '�return[e,$ifaceNil];    case 4:  '�g=c.Uint();  '�if((g.$high>0||(g.$high===0&&g.$low>2147483647))){$s=11;continue;}$s=12;continue;    case 11:  (h=B.Errorf("sql/driver: value %d overflows int32",new AC([a]));$s=13;case 13:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=14;case 14:return[$ifaceNil,h];    case 12:  ([return[new $Int64(g.$high,g.$low),$ifaceNil];    case 5:  (�j=c.String();$s=15;case 15:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=D.Atoi(j);$s=16;case 16:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}i=k;l=i[0];m=i[1];  (�if(!($interfaceIsEqual(m,$ifaceNil))){$s=17;continue;}$s=18;continue;    case 17:  (�n=B.Errorf("sql/driver: value %q can't be converted to int32",new AC([a]));$s=19;case 19:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}$s=20;case 20:return[$ifaceNil,n];    case 18:  )return[new $Int64(0,l),$ifaceNil];    case 6:    case 2:  )0o=B.Errorf("sql/driver: unsupported value %v (type %T) converting to int32",new AC([a,a]));$s=21;case 21:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}$s=22;case 22:return[$ifaceNil,o];    }return;}if($f===undefined){$f={$blk:U.ptr.prototype.ConvertValue};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};U.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};	int32Typedatabase/sql/driver.ACdatabase/sql/driver.int32Type
fmt.Errorfreflect.ValueOfstrconv.Atoi -(database/sql/driver.stringType).ConvertValue��V.ptr.prototype.ConvertValue=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  *�b=a;    if($assertType(b,$String,true)[1]||$assertType(b,AB,true)[1]){  +return[a,$ifaceNil];    }  + c=B.Sprintf("%v",new AC([a]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=2;case 2:return[new $String(c),$ifaceNil];    }return;}if($f===undefined){$f={$blk:V.ptr.prototype.ConvertValue};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};V.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};
stringTypedatabase/sql/driver.ABdatabase/sql/driver.ACdatabase/sql/driver.stringTypefmt.Sprintf '(database/sql/driver.Null).ConvertValue��W.ptr.prototype.ConvertValue=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  +�b=$clone(this,W);    if($interfaceIsEqual(a,$ifaceNil)){  ,?return[$ifaceNil,$ifaceNil];    }  ,Sc=b.Converter.ConvertValue(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=2;case 2:return c;    }return;}if($f===undefined){$f={$blk:W.ptr.prototype.ConvertValue};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};W.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};Nulldatabase/sql/driver.Null *(database/sql/driver.NotNull).ConvertValue�ZX.ptr.prototype.ConvertValue=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  -7b=$clone(this,X);  -pif($interfaceIsEqual(a,$ifaceNil)){$s=1;continue;}$s=2;continue;    case 1:  -�c=B.Errorf("nil value not allowed",new AC([]));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=4;case 4:return[$ifaceNil,c];    case 2:  -�d=b.Converter.ConvertValue(a);$s=5;case 5:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=6;case 6:return d;    }return;}if($f===undefined){$f={$blk:X.ptr.prototype.ConvertValue};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};NotNulldatabase/sql/driver.ACdatabase/sql/driver.NotNull
fmt.Errorf database/sql/driver.IsValueY��Y=function(a){var $ptr,a,b,c;    if(Z(a)){  .�return true;    }  .�b=$assertType(a,$String,true);c=b[1];    if(c){  .�return true;    }  .�return false;    };$pkg.IsValue=Y;IsValuedatabase/sql/driver.IsScanValuedatabase/sql/driver.IsValue database/sql/driver.IsScanValueZ�FZ=function(a){var $ptr,a,b;    if($interfaceIsEqual(a,$ifaceNil)){  /�return true;    }  /�b=a;    if($assertType(b,$Int64,true)[1]||$assertType(b,$Float64,true)[1]||$assertType(b,AB,true)[1]||$assertType(b,$Bool,true)[1]||$assertType(b,E.Time,true)[1]){  /�return true;    }  /�return false;    };$pkg.IsScanValue=Z;IsScanValuedatabase/sql/driver.ABdatabase/sql/driver.IsScanValue	time.Time 3(database/sql/driver.defaultConverter).ConvertValue�uAA.ptr.prototype.ConvertValue=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(Y(a)){  3�return[a,$ifaceNil];    }  3�b=$assertType(a,S,true);c=b[0];d=b[1];  3�if(d){$s=1;continue;}$s=2;continue;    case 1:  3�f=c.Value();$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  3�return[$ifaceNil,h];    }  4if(!Y(g)){$s=4;continue;}$s=5;continue;    case 4:  4!i=B.Errorf("non-Value type %T returned from Value",new AC([g]));$s=6;case 6:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=7;case 7:return[$ifaceNil,i];    case 5:  4kreturn[g,$ifaceNil];    case 2:  4j=C.ValueOf(a);$s=8;case 8:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j;    l=k.Kind();  4�if(l===(22)){$s=10;continue;}if((l===(2))||(l===(3))||(l===(4))||(l===(5))||(l===(6))){$s=11;continue;}if((l===(7))||(l===(8))||(l===(9))||(l===(10))){$s=12;continue;}if(l===(11)){$s=13;continue;}if((l===(13))||(l===(14))){$s=14;continue;}$s=15;continue;    case 10:  4�if(k.IsNil()){$s=16;continue;}$s=17;continue;    case 16:  4�return[$ifaceNil,$ifaceNil];    case 17:  5	m=k.Elem();$s=19;case 19:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m.Interface();$s=20;case 20:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=new AA.ptr().ConvertValue(n);$s=21;case 21:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}$s=22;case 22:return o;    case 18:    $s=15;continue;    case 11:  5�return[k.Int(),$ifaceNil];    case 12:  5�return[(p=k.Uint(),new $Int64(p.$high,p.$low)),$ifaceNil];    case 13:  6*q=k.Uint();  6=if((q.$high>2147483648||(q.$high===2147483648&&q.$low>=0))){$s=23;continue;}$s=24;continue;    case 23:  6Rr=B.Errorf("uint64 values with high bit set are not supported",new AC([]));$s=25;case 25:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}$s=26;case 26:return[$ifaceNil,r];    case 24:  6�return[new $Int64(q.$high,q.$low),$ifaceNil];    case 14:  6�return[new $Float64(k.Float()),$ifaceNil];    case 15:    case 9:  7 s=B.Errorf("unsupported type %T, a %s",new AC([a,new C.Kind(k.Kind())]));$s=27;case 27:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}$s=28;case 28:return[$ifaceNil,s];    }return;}if($f===undefined){$f={$blk:AA.ptr.prototype.ConvertValue};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};AA.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};defaultConverterdatabase/sql/driver.ACdatabase/sql/driver.IsValuedatabase/sql/driver.Valuer$database/sql/driver.defaultConverter
fmt.Errorfreflect.Kindreflect.ValueOf �
X{"Base":14149,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UeTKywUWG7/goroot/src/database/sql/driver/driver.go","Base":1,"Size":6782,"Lines":[0,55,109,159,160,227,262,265,302,317,318,334,335,392,450,453,464,477,487,499,551,566,589,590,656,667,691,742,796,800,856,914,977,981,1044,1054,1087,1089,1090,1157,1226,1290,1349,1364,1445,1446,1512,1580,1648,1678,1681,1751,1815,1883,1919,1973,1974,2044,2047,2118,2186,2200,2203,2231,2255,2305,2307,2308,2379,2382,2455,2523,2537,2540,2569,2594,2643,2645,2646,2713,2740,2743,2778,2800,2868,2905,2906,2962,3017,3053,3057,3110,3173,3236,3273,3288,3289,3337,3358,3360,3361,3407,3431,3489,3549,3558,3589,3590,3650,3661,3692,3694,3695,3758,3803,3825,3857,3861,3920,3940,3955,3956,4015,4019,4083,4148,4209,4213,4273,4335,4392,4408,4409,4466,4494,4530,4531,4590,4602,4637,4639,4640,4704,4773,4804,4837,4899,4963,5024,5045,5086,5088,5089,5146,5168,5228,5289,5351,5397,5417,5418,5454,5469,5470,5527,5587,5623,5627,5673,5720,5771,5775,5834,5860,5862,5863,5887,5907,5923,5941,5943,5944,6012,6047,6071,6072,6103,6104,6156,6207,6209,6210,6264,6286,6288,6289,6362,6437,6471,6495,6496,6517,6518,6542,6543,6589,6660,6662,6663,6709,6780],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UeTKywUWG7/goroot/src/database/sql/driver/types.go","Base":6784,"Size":7364,"Lines":[0,55,109,159,160,175,176,185,192,203,214,222,224,225,295,298,363,434,494,497,566,636,697,726,729,797,823,826,894,928,960,1013,1057,1059,1060,1115,1118,1177,1210,1234,1268,1292,1294,1295,1360,1363,1392,1430,1455,1474,1495,1532,1594,1629,1647,1648,1671,1672,1706,1707,1757,1758,1821,1847,1859,1875,1889,1922,1940,2019,2023,2039,2053,2094,2112,2191,2195,2211,2214,2215,2243,2263,2341,2358,2384,2407,2411,2490,2573,2591,2617,2640,2644,2723,2726,2727,2816,2818,2819,2885,2929,2949,2950,2974,2975,3010,3011,3073,3099,3119,3197,3215,3256,3325,3329,3347,3430,3449,3472,3541,3545,3570,3592,3630,3648,3729,3733,3756,3759,3855,3857,3858,3925,3988,4053,4083,4105,4106,4131,4132,4195,4214,4236,4252,4255,4289,4291,4292,4357,4419,4438,4464,4466,4467,4526,4541,4559,4562,4598,4600,4601,4672,4734,4756,4782,4784,4785,4847,4862,4912,4915,4951,4953,4954,5016,5072,5107,5128,5142,5145,5175,5189,5192,5206,5208,5209,5270,5334,5373,5388,5402,5405,5424,5471,5485,5488,5502,5504,5505,5567,5627,5647,5650,5712,5779,5850,5914,5985,6045,6111,6169,6211,6258,6259,6290,6291,6333,6334,6403,6420,6436,6439,6440,6472,6497,6515,6534,6538,6558,6629,6633,6650,6653,6654,6680,6700,6719,6742,6760,6779,6790,6855,6859,6937,6960,7027,7058,7080,7099,7119,7198,7202,7227,7267,7292,7295,7362],"Infos":null}]}
 