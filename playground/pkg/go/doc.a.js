0�|go/doc�2�package doc
import io "io"
import regexp "regexp"
import strings "strings"
import template "text/template"
import unicode "unicode"
import utf8 "unicode/utf8"
import ast "go/ast"
import token "go/token"
import path "path"
import sort "sort"
import strconv "strconv"
const @"".AllDecls @"".Mode = 0x1
const @"".AllMethods @"".Mode = 0x2
type @"".Example struct { @"".Name string; @"".Doc string; @"".Code @"go/ast".Node; @"".Play *@"go/ast".File; @"".Comments []*@"go/ast".CommentGroup; @"".Output string; @"".EmptyOutput bool; @"".Order int }
func @"".Examples(@"".files ...*@"go/ast".File) (? []*@"".Example)
type @"".Filter func (? string) (? bool)
type @"".Func struct { @"".Doc string; @"".Name string; @"".Decl *@"go/ast".FuncDecl; @"".Recv string; @"".Orig string; @"".Level int }
var @"".IllegalPrefixes []string
type @"".Mode int
func @"".New(@"".pkg *@"go/ast".Package, @"".importPath string, @"".mode @"".Mode) (? *@"".Package)
type @"".Note struct { @"".Pos @"go/token".Pos; @"".End @"go/token".Pos; @"".UID string; @"".Body string }
type @"".Package struct { @"".Doc string; @"".Name string; @"".ImportPath string; @"".Imports []string; @"".Filenames []string; @"".Notes map[string][]*@"".Note; @"".Bugs []string; @"".Consts []*@"".Value; @"".Types []*@"".Type; @"".Vars []*@"".Value; @"".Funcs []*@"".Func }
func (? *@"".Package) @"".Filter(@"".f @"".Filter) ()
func @"".Synopsis(@"".s string) (? string)
func @"".ToHTML(@"".w @"io".Writer, @"".text string, @"".words map[string]string) ()
func @"".ToText(@"".w @"io".Writer, @"".text string, @"".indent string, @"".preIndent string, @"".width int) ()
type @"".Type struct { @"".Doc string; @"".Name string; @"".Decl *@"go/ast".GenDecl; @"".Consts []*@"".Value; @"".Vars []*@"".Value; @"".Funcs []*@"".Func; @"".Methods []*@"".Func }
type @"".Value struct { @"".Doc string; @"".Names []string; @"".Decl *@"go/ast".GenDecl; @"".order int }
type @"".block struct { @"".op @"".op; @"".lines []string }
type @"".data struct { @"".n int; @"".swap func (@"".i int, @"".j int) (); @"".less func (@"".i int, @"".j int) (? bool) }
func (? *@"".data) @"".Len() (? int)
func (? *@"".data) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".data) @"".Swap(@"".i int, @"".j int) ()
type @"".embeddedSet map[*@"".namedType]bool
type @"".exampleByName []*@"".Example
func (? @"".exampleByName) @"".Len() (? int)
func (? @"".exampleByName) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".exampleByName) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".exampleByName) @"".Len() (? int)
func (? *@"".exampleByName) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".exampleByName) @"".Swap(@"".i int, @"".j int) ()
type @"".lineWrapper struct { @"".out @"io".Writer; @"".printed bool; @"".width int; @"".indent string; @"".n int; @"".pendSpace int }
func (? *@"".lineWrapper) @"".flush() ()
func (? *@"".lineWrapper) @"".write(@"".text string) ()
type @"".methodSet map[string]*@"".Func
func (? @"".methodSet) @"".add(@"".m *@"".Func) ()
func (? @"".methodSet) @"".set(@"".f *@"go/ast".FuncDecl) ()
func (? *@"".methodSet) @"".add(@"".m *@"".Func) ()
func (? *@"".methodSet) @"".set(@"".f *@"go/ast".FuncDecl) ()
type @"".namedType struct { @"".doc string; @"".name string; @"".decl *@"go/ast".GenDecl; @"".isEmbedded bool; @"".isStruct bool; @"".embedded @"".embeddedSet; @"".values []*@"".Value; @"".funcs @"".methodSet; @"".methods @"".methodSet }
type @"".op int
type @"".reader struct { @"".mode @"".Mode; @"".doc string; @"".filenames []string; @"".notes map[string][]*@"".Note; @"".imports map[string]int; @"".values []*@"".Value; @"".types map[string]*@"".namedType; @"".funcs @"".methodSet; @"".errorDecl bool; @"".fixlist []*@"go/ast".InterfaceType }
func (? *@"".reader) @"".cleanupTypes() ()
func (? *@"".reader) @"".collectEmbeddedMethods(@"".mset @"".methodSet, @"".typ *@"".namedType, @"".recvTypeName string, @"".embeddedIsPtr bool, @"".level int, @"".visited @"".embeddedSet) ()
func (? *@"".reader) @"".computeMethodSets() ()
func (? *@"".reader) @"".fileExports(@"".src *@"go/ast".File) ()
func (? *@"".reader) @"".filterDecl(@"".decl @"go/ast".Decl) (? bool)
func (? *@"".reader) @"".filterFieldList(@"".parent *@"".namedType, @"".fields *@"go/ast".FieldList, @"".ityp *@"go/ast".InterfaceType) (@"".removedFields bool)
func (? *@"".reader) @"".filterParamList(@"".fields *@"go/ast".FieldList) ()
func (? *@"".reader) @"".filterSpec(@"".spec @"go/ast".Spec) (? bool)
func (? *@"".reader) @"".filterSpecList(@"".list []@"go/ast".Spec) (? []@"go/ast".Spec)
func (? *@"".reader) @"".filterType(@"".parent *@"".namedType, @"".typ @"go/ast".Expr) ()
func (? *@"".reader) @"".isVisible(@"".name string) (? bool)
func (? *@"".reader) @"".lookupType(@"".name string) (? *@"".namedType)
func (? *@"".reader) @"".readDoc(@"".comment *@"go/ast".CommentGroup) ()
func (? *@"".reader) @"".readFile(@"".src *@"go/ast".File) ()
func (? *@"".reader) @"".readFunc(@"".fun *@"go/ast".FuncDecl) ()
func (? *@"".reader) @"".readNote(@"".list []*@"go/ast".Comment) ()
func (? *@"".reader) @"".readNotes(@"".comments []*@"go/ast".CommentGroup) ()
func (? *@"".reader) @"".readPackage(@"".pkg *@"go/ast".Package, @"".mode @"".Mode) ()
func (? *@"".reader) @"".readType(@"".decl *@"go/ast".GenDecl, @"".spec *@"go/ast".TypeSpec) ()
func (? *@"".reader) @"".readValue(@"".decl *@"go/ast".GenDecl) ()
func (? *@"".reader) @"".recordAnonymousField(@"".parent *@"".namedType, @"".fieldType @"go/ast".Expr) (@"".fname string)
func (? *@"".reader) @"".remember(@"".typ *@"go/ast".InterfaceType) ()
type @"go/ast".Node interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos) }
type @"go/ast".File struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Package @"go/token".Pos; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Decls []@"go/ast".Decl; @"go/ast".Scope *@"go/ast".Scope; @"go/ast".Imports []*@"go/ast".ImportSpec; @"go/ast".Unresolved []*@"go/ast".Ident; @"go/ast".Comments []*@"go/ast".CommentGroup }
func (? *@"go/ast".File) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".File) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".CommentGroup struct { @"go/ast".List []*@"go/ast".Comment }
func (? *@"go/ast".CommentGroup) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".CommentGroup) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".CommentGroup) @"go/ast".Text() (? string)
type @"go/ast".FuncDecl struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Recv *@"go/ast".FieldList; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Type *@"go/ast".FuncType; @"go/ast".Body *@"go/ast".BlockStmt }
func (? *@"go/ast".FuncDecl) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FuncDecl) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".FuncDecl) @"go/ast".declNode() ()
type @"go/ast".Package struct { @"go/ast".Name string; @"go/ast".Scope *@"go/ast".Scope; @"go/ast".Imports map[string]*@"go/ast".Object; @"go/ast".Files map[string]*@"go/ast".File }
func (? *@"go/ast".Package) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Package) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/token".Pos int
func (? @"go/token".Pos) @"go/token".IsValid() (? bool)
func (? *@"go/token".Pos) @"go/token".IsValid() (? bool)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"go/ast".GenDecl struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".TokPos @"go/token".Pos; @"go/ast".Tok @"go/token".Token; @"go/ast".Lparen @"go/token".Pos; @"go/ast".Specs []@"go/ast".Spec; @"go/ast".Rparen @"go/token".Pos }
func (? *@"go/ast".GenDecl) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".GenDecl) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".GenDecl) @"go/ast".declNode() ()
type @"go/ast".InterfaceType struct { @"go/ast".Interface @"go/token".Pos; @"go/ast".Methods *@"go/ast".FieldList; @"go/ast".Incomplete bool }
func (? *@"go/ast".InterfaceType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".InterfaceType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".InterfaceType) @"go/ast".exprNode() ()
type @"go/ast".Decl interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".declNode() () }
type @"go/ast".FieldList struct { @"go/ast".Opening @"go/token".Pos; @"go/ast".List []*@"go/ast".Field; @"go/ast".Closing @"go/token".Pos }
func (? *@"go/ast".FieldList) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FieldList) @"go/ast".NumFields() (? int)
func (? *@"go/ast".FieldList) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".Spec interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".specNode() () }
type @"go/ast".Expr interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".exprNode() () }
type @"go/ast".Comment struct { @"go/ast".Slash @"go/token".Pos; @"go/ast".Text string }
func (? *@"go/ast".Comment) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Comment) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".TypeSpec struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Type @"go/ast".Expr; @"go/ast".Comment *@"go/ast".CommentGroup }
func (? *@"go/ast".TypeSpec) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".TypeSpec) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".TypeSpec) @"go/ast".specNode() ()
type @"go/ast".Ident struct { @"go/ast".NamePos @"go/token".Pos; @"go/ast".Name string; @"go/ast".Obj *@"go/ast".Object }
func (? *@"go/ast".Ident) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Ident) @"go/ast".IsExported() (? bool)
func (? *@"go/ast".Ident) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".Ident) @"go/ast".String() (? string)
func (? *@"go/ast".Ident) @"go/ast".exprNode() ()
type @"go/ast".Scope struct { @"go/ast".Outer *@"go/ast".Scope; @"go/ast".Objects map[string]*@"go/ast".Object }
func (? *@"go/ast".Scope) @"go/ast".Insert(@"go/ast".obj *@"go/ast".Object) (@"go/ast".alt *@"go/ast".Object)
func (? *@"go/ast".Scope) @"go/ast".Lookup(@"go/ast".name string) (? *@"go/ast".Object)
func (? *@"go/ast".Scope) @"go/ast".String() (? string)
type @"go/ast".ImportSpec struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Path *@"go/ast".BasicLit; @"go/ast".Comment *@"go/ast".CommentGroup; @"go/ast".EndPos @"go/token".Pos }
func (? *@"go/ast".ImportSpec) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".ImportSpec) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".ImportSpec) @"go/ast".specNode() ()
type @"go/ast".FuncType struct { @"go/ast".Func @"go/token".Pos; @"go/ast".Params *@"go/ast".FieldList; @"go/ast".Results *@"go/ast".FieldList }
func (? *@"go/ast".FuncType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FuncType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".FuncType) @"go/ast".exprNode() ()
type @"go/ast".BlockStmt struct { @"go/ast".Lbrace @"go/token".Pos; @"go/ast".List []@"go/ast".Stmt; @"go/ast".Rbrace @"go/token".Pos }
func (? *@"go/ast".BlockStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BlockStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BlockStmt) @"go/ast".stmtNode() ()
type @"go/ast".Object struct { @"go/ast".Kind @"go/ast".ObjKind; @"go/ast".Name string; @"go/ast".Decl interface {  }; @"go/ast".Data interface {  }; @"go/ast".Type interface {  } }
func (? *@"go/ast".Object) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/token".Token int
func (? @"go/token".Token) @"go/token".IsKeyword() (? bool)
func (? @"go/token".Token) @"go/token".IsLiteral() (? bool)
func (? @"go/token".Token) @"go/token".IsOperator() (? bool)
func (? @"go/token".Token) @"go/token".Precedence() (? int)
func (? @"go/token".Token) @"go/token".String() (? string)
func (? *@"go/token".Token) @"go/token".IsKeyword() (? bool)
func (? *@"go/token".Token) @"go/token".IsLiteral() (? bool)
func (? *@"go/token".Token) @"go/token".IsOperator() (? bool)
func (? *@"go/token".Token) @"go/token".Precedence() (? int)
func (? *@"go/token".Token) @"go/token".String() (? string)
type @"go/ast".Field struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Names []*@"go/ast".Ident; @"go/ast".Type @"go/ast".Expr; @"go/ast".Tag *@"go/ast".BasicLit; @"go/ast".Comment *@"go/ast".CommentGroup }
func (? *@"go/ast".Field) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Field) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".BasicLit struct { @"go/ast".ValuePos @"go/token".Pos; @"go/ast".Kind @"go/token".Token; @"go/ast".Value string }
func (? *@"go/ast".BasicLit) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BasicLit) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BasicLit) @"go/ast".exprNode() ()
type @"go/ast".Stmt interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".stmtNode() () }
type @"go/ast".ObjKind int
func (? @"go/ast".ObjKind) @"go/ast".String() (? string)
func (? *@"go/ast".ObjKind) @"go/ast".String() (? string)
$$
0�8github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathsyscalltimeosstrconvreflectfmtsortgo/tokenstrings
go/scannergo/astpath
rN(a,b.substring(0,((0<0||0>=e.length)?$throwRuntimeError("index out of range"):e.array[e.offset+0])),d);  
�f=b.substring(((0<0||0>=e.length)?$throwRuntimeError("index out of range"):e.array[e.offset+0]),((1<0||1>=e.length)?$throwRuntimeError("index out of range"):e.array[e.offset+1]));  
�g="";  
�h=false;  
�    if(!(c===false)){  
�i=(j=c[f],j!==undefined?[j.v,true]:["",false]);g=i[0];h=i[1];}  &    if(((2<0||2>=e.length)?$throwRuntimeError("index out of range"):e.array[e.offset+2])>=0){  �    if(!h){  �g=f;}  �h=false;}  1    if(g.length>0){  Fa.Write(P);  YD.HTMLEscape(a,new($sliceType($Uint8))($stringToBytes(g)));  �a.Write(Q);}  �    if(h){  �a.Write(S);}  �N(a,f,d);  �    if(h){  �a.Write(T);}  
unindent07go/doc:commonPrefixgo/doc:indentLengo/doc:isBlank0�YAG��AG=function(a){var b,c,d,e,f;  �a=C.TrimSpace(a);  �    if(a.length===0){  return"";}  Db=F.DecodeRuneInString(a);c=b[0];  k    if(!E.IsLetter(c)||!E.IsUpper(c)){  �return"";}  �d=F.DecodeLastRuneInString(a);c=d[0];  �    if(!E.IsLetter(c)&&!E.IsDigit(c)){  0return"";}  i    if(C.IndexAny(a,",.;:!?+*/=()[]{}_^\xC2\xB0&\xC2\xA7~%#@<\">\\")>=0){  �return"";}  �  �e=a;while(true){  �f=C.IndexRune(e,39);      if(f<0){  ,break;}  8    if((f+1>>0)>=e.length||!((e.charCodeAt((f+1>>0))===115))||((f+2>>0)<e.length&&!((e.charCodeAt((f+2>>0))===32)))){  �return"";}  �e=e.substring((f+2>>0));}  �return a;    }; 0	heading0��strings:IndexAnystrings:IndexRunestrings:TrimSpace#unicode/utf8:DecodeLastRuneInStringunicode/utf8:DecodeRuneInStringunicode:IsDigitunicode:IsLetterunicode:IsUpper0oAKCAK=function(a){  �return"hdr-"+AJ.ReplaceAllString(a,"_");    }; 0
anchorID0go/doc:nonAlphaNumRx0��AL��AL=$pkg.ToHTML=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;  �d=AM(b);e=0;while(e<d.length){f=new AI.Ptr();$copy(f,((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+e]),AI);  �g=f.op;  �if(g===0){  �a.Write(U);  �h=f.lines;i=0;while(i<h.length){j=((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h.array[h.offset+i]);  AB(a,j,c,true);i++;}  3a.Write(V);  H}else if(g===1){  Xa.Write(Y);  kk="";  wl=f.lines;m=0;while(m<l.length){n=((m<0||m>=l.length)?$throwRuntimeError("index out of range"):l.array[l.offset+m]);  �    if(k===""){  �k=AK(n);  �a.Write(new($sliceType($Uint8))($stringToBytes(k)));  �a.Write(Z);}  �N(a,n,true);m++;}      if(k===""){  1a.Write(Z);}  Ja.Write(AA);  _}else if(g===2){  na.Write(W);  �o=f.lines;p=0;while(p<o.length){q=((p<0||p>=o.length)?$throwRuntimeError("index out of range"):o.array[o.offset+p]);  �AB(a,q,false,false);p++;}  �a.Write(X);}e++;}    }; 0ToHTML0��go/doc:anchorIDgo/doc:block
return;}  (a.out.Write(AP);  (&a.pendSpace=0;  (7a.n=0;    };AO.prototype.flush=function(){return this.$val.flush();}; 0lineWrapperflush0go/doc:lineWrapper	go/doc:nl0��AX��AX=$pkg.New=function(a,b,c){var d,e;  2�  2�d=new BV.Ptr();$copy(d,new BV.Ptr(),BV);  2�d.readPackage(a,c);  2�d.computeMethodSets();  3d.cleanupTypes();  3return new AR.Ptr(d.doc,a.Name,b,CE(d.imports),d.filenames,d.notes,CK((e=d.notes["BUG"],e!==undefined?e.v:($sliceType(($ptrType(AV)))).nil)),CG(d.values,64),CH(d.types,!(((c&2)===0))),CG(d.values,85),CJ(d.funcs,true));    }; 0New0��go/doc:Funcgo/doc:Notego/doc:Packagego/doc:Typego/doc:Valuego/doc:cleanupTypesgo/doc:computeMethodSetsgo/doc:noteBodiesgo/doc:readPackage
Examples0��go/ast:CommentGroupgo/ast:Filego/ast:FuncDeclgo/ast:GenDeclgo/doc:Examplego/doc:exampleByNamego/doc:exampleOutput
l.Name=G.NewIdent("main");  W)l.Decls=c;  W:l.Comments=b;  WQreturn l;    }; 0playExampleFile0ygo/ast:Declgo/ast:Filego/ast:FuncDeclgo/ast:NewIdent
e=this;  a�    if(b===($ptrType(G.FieldList)).nil){  a�return d;}  a�f=b.List;  a�g=0;  a�h=f;i=0;while(i<h.length){j=((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h.array[h.offset+i]);  a�k=false;  a�  a�l=j.Names.length;    if(l===0){  b-m=e.recordAnonymousField(a,j.Type);  bd    if(G.IsExported(m)){  b�k=true;    }else if(!(c===($ptrType(G.InterfaceType)).nil)&&m==="error"){  ckk=true;  c�e.remember(c);}}else{  c�j.Names=BI(j.Names);  c�    if(j.Names.length<l){  c�d=true;}  d
filterType0��go/ast:ArrayTypego/ast:ChanTypego/ast:FuncTypego/ast:Identgo/ast:InterfaceTypego/ast:MapTypego/ast:ParenExprgo/ast:StructTypego/doc:filterFieldListgo/doc:filterParamListgo/doc:namedType
filterSpec0��go/ast:ImportSpecgo/ast:IsExportedgo/ast:TypeSpecgo/ast:ValueSpecgo/doc:filterIdentListgo/doc:filterTypego/doc:lookupTypego/doc:namedType
filterDecl0Zgo/ast:FuncDeclgo/ast:GenDeclgo/ast:IsExportedgo/doc:filterSpecList
recvString0go/ast:Identgo/ast:StarExpr0�- ��BQ.prototype.set=function(a){var b,c,d,e,f,g,h,i;  {�b=this.$val;  {�c=a.Name.Name;  {�  {�e=(d=b[c],d!==undefined?d.v:($ptrType(AU)).nil);    if(!(e===($ptrType(AU)).nil)&&!(e.Doc==="")){  }
return;}  }Of="";  }[    if(!(a.Recv===($ptrType(G.FieldList)).nil)){  }p  }tg=null;  }�  }�h=a.Recv.List;    if(h.length===1){  }�g=((0<0||0>=h.length)?$throwRuntimeError("index out of range"):h.array[h.offset+0]).Type;}  }�f=BR(g);}  ~
lookupType0?go/ast:GenDeclgo/doc:Valuego/doc:namedType
go/doc:set0�� �gBV.Ptr.prototype.readNote=function(a){var b,c,d,e,f,g,h,i;  ��b=this;  �c=(new G.CommentGroup.Ptr(a)).Text();  �6  �9d=BZ.FindStringSubmatchIndex(c);    if(!(d===($sliceType($Int)).nil)){  �e=CP(c.substring(((1<0||1>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+1])),1);  �B    if(!(e==="")){  �Uf=c.substring(((2<0||2>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+2]),((3<0||3>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+3]));  �ri=f;(b.notes||$throwRuntimeError("assignment to entry in nil map"))[i]={k:i,v:$append((h=b.notes[f],h!==undefined?h.v:($sliceType(($ptrType(AV)))).nil),new AV.Ptr(((0<0||0>=a.length)?$throwRuntimeError("index out of range"):a.array[a.offset+0]).Pos(),(g=a.length-1>>0,((g<0||g>=a.length)?$throwRuntimeError("index out of range"):a.array[a.offset+g])).End(),c.substring(((4<0||4>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+4]),((5<0||5>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+5])),e))};}}    };BV.prototype.readNote=function(a){return this.$val.readNote(a);}; 0readerreadNote0dgo/ast:Commentgo/ast:CommentGroupgo/doc:Notego/doc:cleango/doc:noteMarkerRx
go/doc:addgo/doc:customizeRecvgo/doc:methodSet
b=a.types;c=0;d=$keys(b);while(c<d.length){e=b[d[c]];f=e.v;  �(g=a.isVisible(f.name);  �I    if(f.decl===($ptrType(G.GenDecl)).nil&&((h=CL[f.name],h!==undefined?h.v:false)||f.isEmbedded&&g)){  ��a.values=$appendSlice(a.values,f.values);  �i=f.funcs;j=0;k=$keys(i);while(j<k.length){l=i[k[j]];m=l.k;n=l.v;  ��o=m;(a.funcs||$throwRuntimeError("assignment to entry in nil map"))[o]={k:o,v:n};j++;}  ��p=f.methods;q=0;r=$keys(p);while(q<r.length){s=p[r[q]];t=s.k;u=s.v;  �=  �@v=(w=a.funcs[t],w!==undefined?[w.v,true]:[($ptrType(AU)).nil,false]);x=v[1];    if(!x){  �iy=t;(a.funcs||$throwRuntimeError("assignment to entry in nil map"))[y]={k:y,v:u};}q++;}}  ��    if(f.decl===($ptrType(G.GenDecl)).nil||!g){  ��delete a.types[f.name];}c++;}    };BV.prototype.cleanupTypes=function(){return this.$val.cleanupTypes();}; 0readercleanupTypes0Wgo/ast:GenDeclgo/doc:Funcgo/doc:isVisiblego/doc:predeclaredTypes
sortedKeys0sort:Strings0��CF��CF=function(a){var b,c,d,e,f,g;  �    if(a.Specs.length===1){  �  �b=(c=(d=a.Specs,((0<0||0>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+0])),(c!==null&&c.constructor===($ptrType(G.ValueSpec))?[c.$val,true]:[($ptrType(G.ValueSpec)).nil,false]));e=b[0];f=b[1];    if(f){  �Mreturn(g=e.Names,((0<0||0>=g.length)?$throwRuntimeError("index out of range"):g.array[g.offset+0])).Name;}}  �lreturn"";    }; 0
removeStar0 0��CJ�"CJ=function(a,b){var c,d,e,f,g,h,i;  �Bc=($sliceType(($ptrType(AU)))).make($keys(a).length,0,function(){return($ptrType(AU)).nil;});  �ad=0;  �ie=a;f=0;g=$keys(e);while(f<g.length){h=e[g[f]];i=h.v;  ˩  ˴if(i.Decl===($ptrType(G.FuncDecl)).nil){  ��}else if(b||i.Level===0||!G.IsExported(CI(i.Orig))){  ̜(d<0||d>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+d]=i;  ̫  ̫d=d+1>>0;}f++;}  ̷c=$subslice(c,0,d);  ��CD((function(j,k){  ��return((j<0||j>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+j]).Name<((k<0||k>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+k]).Name;    }),(function(j,k){var l,m;  �"l=((k<0||k>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+k]);m=((j<0||j>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+j]);(j<0||j>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+j]=l;(k<0||k>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+k]=m;    }),c.length);  �Zreturn c;    }; 0
noteBodies0 0��CO��CO=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;  �  �b=0;c=0;d=0;e=b;f=c;g=d;  �)h=a;i=0;while(i<h.length){j=$decodeRune(h,i);k=i;l=j[0];  �A    if((l===10)||(l===13)||(l===9)){  �ml=32;}  �{    if((l===32)&&(g===46)&&(!E.IsUpper(f)||E.IsUpper(e))){  ��return k;}  ��    if((g===12290)||(g===65294)){  ��return k;}  �	m=f;n=g;o=l;e=m;f=n;g=o;i+=j[1];}  �#return a.length;    }; 0firstSentenceLen0unicode:IsUpper0��CP��CP=function(a,b){var c,d,e,f,g;  �n  �rc=($sliceType($Uint8)).nil;  �|d=32;  ֌  ֐e=0;while(e<a.length){  ֬f=a.charCodeAt(e);  ָ    if((((b&1))===0)&&(f===10)||(f===13)||(f===9)){  ��f=32;}  �	    if(!((f===32))||!((d===32))){  �&c=$append(c,f);  �:d=f;}  ֤  ֤e=e+1>>0;}  �j  �mg=c.length;    if(g>0&&(d===32)){  אc=$subslice(c,0,(g-1>>0));}  ףreturn $bytesToString(c);    }; 0clean0 0��CQ�"CQ=$pkg.Synopsis=function(a){var b,c,d;  �Ea=CP(a.substring(0,CO(a)),0);  �mb=$pkg.IllegalPrefixes;c=0;while(c<b.length){d=((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b.array[b.offset+c]);  ٘    if(C.HasPrefix(C.ToLower(a),d)){  ��return"";}c++;}  ��return a;    }; 0
Synopsis0cgo/doc:IllegalPrefixesgo/doc:cleango/doc:firstSentenceLenstrings:HasPrefixstrings:ToLower0L  0ldquo0 0M  0rdquo0 0O  0	matchRx0 0P  0html_a0 0Q  0	html_aq0 0R  0	html_enda0 0S  0html_i0 0T  0	html_endi0 0U  0html_p0 0V  0	html_endp0 0W  0
html_pre0 0X  0
noteMarker0 0BZ  0noteMarkerRx0 0CA  0
html_pre0go/doc:html_pre0k  @    X=new($sliceType($Uint8))($stringToBytes("</pre>\n"));    0
noteMarker0go/doc:noteMarker0p  *    BZ=B.MustCompile("^[ \\t]*"+BY);    0 0<go/doc:noteMarkergo/doc:noteMarkerRxregexp:MustCompile0v  /    CA=B.MustCompile("^/[/*][ \\t]*"+BY);    0 0=go/doc:noteCommentRxgo/doc:noteMarkerregexp:MustCompile0��  �bvar a,b;    CL=(a=new $Map(),b="bool",a[b]={k:b,v:true},b="byte",a[b]={k:b,v:true},b="complex64",a[b]={k:b,v:true},b="complex128",a[b]={k:b,v:true},b="error",a[b]={k:b,v:true},b="float32",a[b]={k:b,v:true},b="float64",a[b]={k:b,v:true},b="int",a[b]={k:b,v:true},b="int8",a[b]={k:b,v:true},b="int16",a[b]={k:b,v:true},b="int32",a[b]={k:b,v:true},b="int64",a[b]={k:b,v:true},b="rune",a[b]={k:b,v:true},b="string",a[b]={k:b,v:true},b="uint",a[b]={k:b,v:true},b="uint8",a[b]={k:b,v:true},b="uint16",a[b]={k:b,v:true},b="uint32",a[b]={k:b,v:true},b="uint64",a[b]={k:b,v:true},b="uintptr",a[b]={k:b,v:true},a);    0predeclaredTypes0go/doc:predeclaredTypes0��  ��var c,d;    CM=(c=new $Map(),d="append",c[d]={k:d,v:true},d="cap",c[d]={k:d,v:true},d="close",c[d]={k:d,v:true},d="complex",c[d]={k:d,v:true},d="copy",c[d]={k:d,v:true},d="delete",c[d]={k:d,v:true},d="imag",c[d]={k:d,v:true},d="len",c[d]={k:d,v:true},d="make",c[d]={k:d,v:true},d="new",c[d]={k:d,v:true},d="panic",c[d]={k:d,v:true},d="print",c[d]={k:d,v:true},d="println",c[d]={k:d,v:true},d="real",c[d]={k:d,v:true},d="recover",c[d]={k:d,v:true},c);    0predeclaredFuncs0go/doc:predeclaredFuncs0��  ��var e,f;    CN=(e=new $Map(),f="false",e[f]={k:f,v:true},f="iota",e[f]={k:f,v:true},f="nil",e[f]={k:f,v:true},f="true",e[f]={k:f,v:true},e);    0predeclaredConstants0go/doc:predeclaredConstants0��  ]    $pkg.IllegalPrefixes=new($sliceType($String))(["copyright","all rights","author"]);    0IllegalPrefixes0go/doc:IllegalPrefixes0      0 0 0 �-W{"Base":55863,"Files":[{"Name":"/usr/local/go/src/pkg/go/doc/comment.go","Base":1,"Size":10304,"Lines":[0,55,109,159,160,220,221,233,234,243,249,259,270,305,316,332,334,335,341,368,395,397,398,447,497,555,566,577,614,631,684,733,750,766,780,800,815,835,841,875,880,884,887,932,934,935,943,973,1052,1053,1073,1151,1182,1220,1261,1330,1370,1372,1373,1443,1444,1450,1485,1513,1543,1572,1602,1633,1665,1696,1730,1764,1792,1825,1827,1828,1908,1988,2065,2145,2224,2303,2383,2408,2487,2494,2539,2555,2564,2568,2641,2642,2671,2710,2711,2730,2757,2769,2788,2808,2847,2851,2868,2948,2965,3024,3048,3053,3096,3100,3101,3118,3138,3157,3196,3216,3220,3235,3254,3258,3290,3305,3327,3331,3351,3373,3377,3378,3391,3412,3415,3445,3447,3448,3479,3487,3538,3544,3547,3557,3559,3560,3590,3643,3645,3646,3686,3694,3742,3748,3751,3766,3768,3769,3801,3823,3832,3835,3836,3876,3919,3949,3971,4029,4033,4036,4054,4055,4066,4096,4118,4141,4145,4148,4150,4151,4222,4264,4299,4331,4352,4364,4367,4368,4418,4457,4507,4519,4522,4523,4561,4603,4653,4665,4668,4669,4711,4782,4794,4797,4798,4837,4857,4891,4904,4913,4917,4990,5027,5031,5045,5048,5049,5062,5064,5065,5077,5078,5086,5104,5112,5119,5121,5122,5142,5152,5168,5170,5171,5226,5227,5263,5343,5402,5404,5405,5456,5498,5558,5610,5660,5663,5724,5795,5864,5925,5955,5958,6019,6061,6064,6142,6220,6289,6292,6376,6463,6479,6544,6578,6594,6609,6628,6662,6698,6703,6725,6740,6759,6771,6805,6823,6848,6873,6895,6901,6934,6939,6956,6977,6982,7004,7018,7039,7073,7108,7113,7137,7141,7144,7146,7147,7182,7189,7204,7220,7221,7246,7271,7274,7275,7294,7313,7355,7369,7373,7376,7377,7418,7435,7466,7485,7506,7528,7539,7546,7569,7581,7585,7612,7634,7645,7646,7682,7696,7770,7778,7783,7818,7856,7864,7869,7890,7899,7900,7917,7918,7955,7995,8021,8033,8037,8038,8098,8177,8236,8292,8318,8360,8372,8425,8436,8462,8475,8480,8484,8485,8505,8528,8553,8585,8591,8594,8603,8604,8616,8618,8619,8687,8756,8830,8905,8982,9001,9014,9031,9049,9052,9086,9102,9117,9168,9202,9220,9225,9238,9253,9268,9302,9327,9332,9345,9359,9374,9408,9432,9464,9491,9497,9502,9506,9509,9511,9512,9538,9559,9575,9590,9608,9623,9638,9640,9641,9663,9687,9688,9731,9759,9812,9815,9833,9834,9876,9909,9939,9985,10004,10015,10034,10038,10054,10087,10091,10126,10151,10176,10194,10197,10199,10200,10232,10247,10256,10259,10276,10293,10302],"Infos":null},{"Name":"/usr/local/go/src/pkg/go/doc/doc.go","Base":10306,"Size":3191,"Lines":[0,55,109,159,160,225,237,238,247,257,269,271,272,327,349,368,387,406,427,448,479,547,594,609,610,627,644,660,677,693,695,696,777,797,811,870,890,891,902,904,905,958,977,990,1003,1022,1023,1051,1119,1187,1253,1336,1338,1339,1392,1411,1424,1437,1457,1458,1470,1535,1582,1629,1684,1686,1687,1765,1842,1922,1999,2018,2093,2142,2180,2182,2183,2228,2242,2243,2251,2313,2340,2367,2368,2420,2464,2476,2478,2479,2548,2616,2619,2687,2701,2727,2750,2768,2786,2807,2831,2857,2894,2921,2944,2986,3037,3095,3144,3186,3189],"Infos":null},{"Name":"/usr/local/go/src/pkg/go/doc/example.go","Base":13498,"Size":9934,"Lines":[0,55,109,159,160,205,206,218,219,228,238,250,258,268,276,287,298,309,325,327,328,398,420,478,529,551,616,649,688,731,781,783,784,859,936,983,1004,1034,1091,1160,1183,1219,1285,1299,1312,1317,1350,1362,1375,1380,1393,1416,1474,1494,1507,1512,1545,1558,1563,1581,1602,1625,1630,1691,1726,1766,1788,1813,1857,1889,1914,1958,1987,1993,1997,2048,2103,2155,2208,2232,2273,2277,2309,2312,2344,2357,2359,2360,2426,2427,2504,2598,2653,2702,2724,2785,2809,2875,2913,2954,2974,2979,3000,3004,3007,3054,3056,3057,3128,3199,3248,3288,3327,3342,3345,3392,3406,3409,3465,3496,3498,3499,3529,3530,3591,3662,3738,3739,3804,3865,3931,3981,4033,4061,4074,4077,4078,4123,4163,4198,4226,4248,4279,4300,4334,4364,4388,4421,4446,4480,4510,4517,4523,4528,4532,4535,4536,4604,4641,4663,4700,4739,4803,4867,4913,4955,4988,5004,5008,5063,5117,5141,5183,5220,5236,5240,5276,5298,5329,5361,5384,5389,5393,5407,5410,5442,5460,5526,5539,5542,5543,5600,5629,5706,5731,5735,5738,5739,5808,5875,5951,6006,6060,6094,6136,6154,6166,6170,6190,6211,6230,6244,6257,6300,6313,6326,6369,6384,6389,6393,6414,6437,6462,6466,6469,6470,6538,6582,6608,6621,6624,6625,6679,6713,6747,6793,6827,6831,6834,6835,6891,6926,6980,7014,7018,7021,7022,7081,7134,7135,7170,7199,7223,7287,7337,7340,7374,7443,7468,7496,7500,7549,7552,7614,7615,7645,7673,7703,7787,7801,7804,7805,7826,7845,7879,7925,7947,7950,7952,7953,8031,8090,8139,8179,8206,8284,8310,8313,8314,8383,8405,8437,8509,8563,8577,8613,8675,8688,8692,8719,8722,8723,8771,8783,8814,8831,8854,8865,8867,8868,8940,9000,9115,9161,9201,9261,9285,9288,9289,9357,9385,9408,9429,9451,9454,9513,9546,9585,9614,9616,9617,9684,9776,9806,9830,9852,9864,9868,9890,9899,9903,9921,9924,9932],"Infos":null},{"Name":"/usr/local/go/src/pkg/go/doc/exports.go","Base":23433,"Size":4897,"Lines":[0,55,109,159,160,212,213,225,226,242,243,306,341,344,399,407,433,463,478,485,489,492,510,512,513,591,662,691,694,743,806,814,844,864,901,923,986,1008,1013,1017,1034,1053,1060,1064,1067,1087,1112,1115,1146,1148,1149,1228,1302,1375,1400,1403,1526,1546,1555,1558,1579,1587,1617,1638,1675,1697,1752,1782,1803,1850,1904,1958,2014,2035,2056,2061,2072,2118,2147,2172,2177,2206,2227,2232,2236,2253,2286,2305,2312,2316,2319,2339,2362,2365,2390,2398,2400,2401,2473,2476,2534,2554,2588,2617,2621,2624,2626,2627,2702,2775,2841,2844,2907,2933,2951,2970,2992,3017,3039,3066,3089,3137,3160,3164,3185,3215,3246,3272,3319,3342,3346,3366,3393,3422,3443,3472,3475,3477,3478,3528,3555,3578,3626,3640,3662,3699,3723,3752,3767,3771,3792,3841,3892,3907,3937,3997,4019,4023,4026,4040,4042,4043,4105,4113,4139,4162,4177,4184,4188,4191,4209,4211,4212,4262,4289,4309,4347,4373,4394,4444,4497,4551,4599,4636,4639,4653,4655,4656,4722,4725,4771,4779,4810,4833,4853,4860,4864,4867,4895],"Infos":null},{"Name":"/usr/local/go/src/pkg/go/doc/filter.go","Base":28331,"Size":2161,"Lines":[0,55,109,159,160,172,173,189,190,220,221,278,298,336,374,396,413,419,424,428,431,445,447,448,496,525,550,573,607,629,646,652,657,679,702,718,723,754,779,813,830,836,864,899,916,922,927,931,934,948,950,951,1002,1010,1034,1063,1076,1083,1087,1090,1105,1107,1108,1156,1164,1188,1206,1219,1226,1230,1233,1248,1250,1251,1299,1307,1331,1361,1390,1399,1410,1501,1543,1581,1620,1663,1735,1739,1752,1765,1772,1776,1779,1794,1796,1797,1880,1929,1932,1969,2007,2041,2076,2111,2159],"Infos":null},{"Name":"/usr/local/go/src/pkg/go/doc/reader.go","Base":30493,"Size":23367,"Lines":[0,55,109,159,160,172,173,182,192,204,214,222,233,235,236,316,340,343,423,424,506,588,591,623,624,685,750,753,793,820,838,854,875,906,909,927,929,930,995,1064,1114,1117,1162,1183,1230,1294,1354,1417,1480,1515,1524,1527,1585,1597,1617,1636,1678,1721,1743,1747,1772,1775,1796,1818,1832,1843,1857,1871,1874,1921,1923,1924,1995,2067,2084,2087,2124,2145,2185,2204,2213,2216,2257,2310,2334,2352,2371,2375,2378,2380,2381,2461,2476,2477,2540,2584,2587,2648,2672,2690,2713,2738,2775,2821,2851,2878,2882,2903,2930,2933,2941,2943,2944,2997,3034,3035,3109,3181,3203,3206,3230,3273,3305,3367,3368,3425,3482,3548,3549,3577,3614,3633,3652,3654,3655,3735,3749,3750,3808,3869,3926,3986,4047,4088,4091,4112,4123,4124,4147,4198,4218,4248,4249,4266,4290,4327,4358,4377,4378,4432,4509,4598,4600,4601,4648,4701,4703,4704,4761,4817,4875,4904,4907,4961,4993,5042,5045,5086,5099,5102,5151,5171,5189,5220,5249,5278,5281,5302,5314,5316,5317,5379,5443,5507,5547,5550,5644,5683,5710,5719,5722,5771,5797,5835,5866,5869,5877,5879,5880,5934,5993,6049,6073,6091,6106,6115,6118,6140,6142,6143,6195,6231,6233,6234,6278,6341,6368,6423,6474,6511,6515,6518,6532,6534,6535,6586,6589,6637,6692,6762,6832,6902,6917,6931,6943,6951,6986,7019,7030,7084,7088,7101,7112,7134,7178,7223,7236,7241,7273,7334,7394,7452,7513,7528,7532,7550,7579,7620,7670,7691,7708,7718,7723,7741,7754,7758,7772,7778,7781,7782,7824,7837,7846,7849,7850,7924,7945,7969,8067,8112,8160,8212,8216,8219,8220,8255,8281,8313,8328,8351,8355,8405,8407,8408,8471,8474,8537,8564,8590,8613,8633,8651,8677,8698,8701,8721,8742,8745,8753,8755,8756,8798,8801,8868,8905,8922,8974,8977,8978,9031,9086,9103,9104,9130,9147,9197,9214,9284,9301,9304,9354,9376,9377,9435,9498,9526,9549,9589,9619,9648,9691,9695,9698,9700,9701,9753,9756,9803,9827,9843,9844,9897,9919,9931,9990,10001,10042,10071,10081,10085,10138,10162,10166,10199,10267,10336,10404,10469,10478,10481,10482,10557,10597,10631,10658,10715,10772,10803,10868,10912,10948,10972,10984,10990,10995,10999,11002,11003,11033,11051,11053,11054,11060,11186,11280,11377,11379,11380,11444,11447,11496,11544,11608,11652,11699,11746,11774,11811,11829,11858,11910,11935,11970,11997,12013,12019,12023,12026,12028,12029,12072,12143,12212,12280,12346,12349,12408,12442,12510,12531,12558,12600,12616,12643,12649,12659,12664,12668,12682,12706,12710,12713,12715,12716,12774,12777,12820,12850,12871,12892,12942,12945,12946,12971,13005,13033,13054,13072,13094,13134,13169,13215,13284,13314,13322,13329,13335,13367,13428,13447,13467,13505,13555,13611,13662,13715,13766,13787,13837,13860,13867,13878,13884,13919,13963,14018,14075,14131,14188,14216,14235,14286,14339,14388,14439,14491,14515,14542,14572,14580,14606,14613,14619,14624,14646,14663,14667,14670,14671,14708,14735,14807,14809,14810,14870,14892,14938,14972,14987,15026,15053,15089,15090,15145,15195,15203,15238,15266,15272,15275,15302,15303,15337,15377,15404,15430,15450,15454,15470,15473,15475,15476,15556,15565,15566,15654,15738,15782,15785,15786,15836,15870,15902,15953,16015,16044,16082,16127,16177,16180,16201,16202,16267,16297,16342,16343,16414,16438,16472,16473,16538,16550,16576,16605,16638,16658,16659,16673,16675,16676,16748,16751,16898,16919,16964,17021,17077,17133,17190,17216,17262,17301,17343,17364,17435,17440,17444,17470,17565,17569,17572,17594,17596,17597,17679,17682,17721,17750,17786,17804,17817,17896,17907,17923,17948,17952,17955,17956,18032,18050,18085,18111,18115,18118,18120,18121,18191,18263,18333,18375,18378,18412,18441,18474,18552,18629,18704,18781,18836,18857,18901,18933,18967,19021,19079,19101,19106,19128,19164,19228,19271,19294,19300,19305,19309,19368,19401,19428,19432,19435,19437,19438,19518,19529,19530,19549,19559,19580,19606,19608,19609,19659,19711,19770,19771,19814,19882,19915,19917,19918,19963,19995,20003,20025,20041,20047,20050,20070,20083,20085,20086,20152,20155,20197,20221,20269,20295,20299,20302,20313,20315,20316,20374,20432,20440,20465,20492,20509,20516,20520,20523,20541,20542,20551,20575,20656,20675,20680,20720,20725,20783,20796,20799,20800,20813,20815,20816,20885,20916,20924,20947,20966,20985,21005,21025,21074,21121,21161,21209,21213,21219,21222,21223,21232,21294,21352,21365,21368,21369,21382,21384,21385,21420,21452,21467,21470,21480,21482,21483,21540,21571,21579,21602,21642,21653,21675,21704,21774,21829,21884,21899,21906,21910,21913,21931,21940,22002,22060,22073,22076,22089,22091,22092,22165,22233,22236,22278,22297,22324,22354,22357,22370,22372,22373,22453,22480,22481,22521,22542,22563,22584,22605,22626,22647,22668,22689,22710,22731,22752,22773,22794,22815,22836,22857,22878,22899,22920,22941,22943,22944,22984,23002,23020,23038,23056,23074,23092,23110,23128,23146,23164,23182,23200,23218,23236,23254,23256,23257,23301,23317,23333,23349,23365],"Infos":null},{"Name":"/usr/local/go/src/pkg/go/doc/synopsis.go","Base":53861,"Size":2001,"Lines":[0,55,109,159,160,172,173,182,193,204,206,207,274,340,389,392,430,451,474,517,528,532,610,622,626,658,670,674,698,701,716,718,719,727,747,749,750,817,885,953,991,1032,1046,1062,1093,1105,1171,1182,1186,1214,1234,1243,1247,1250,1284,1321,1338,1341,1359,1361,1362,1428,1495,1562,1633,1699,1723,1726,1759,1799,1841,1894,1907,1911,1914,1924,1926,1927,1959,1973,1988,1999],"Infos":null}]}
�