0���debug/pe�2�package pe
import dwarf "debug/dwarf"
import binary "encoding/binary"
import errors "errors"
import fmt "fmt"
import io "io"
import os "os"
import strconv "strconv"
type @"".COFFSymbol struct { @"".Name [8]uint8; @"".Value uint32; @"".SectionNumber int16; @"".Type uint16; @"".StorageClass uint8; @"".NumberOfAuxSymbols uint8 }
const @"".COFFSymbolSize = 0x12
type @"".DataDirectory struct { @"".VirtualAddress uint32; @"".Size uint32 }
type @"".File struct { ? @"".FileHeader; @"".OptionalHeader interface {  }; @"".Sections []*@"".Section; @"".Symbols []*@"".Symbol; @"".closer @"io".Closer }
func (? *@"".File) @"".Close() (? error)
func (? *@"".File) @"".DWARF() (? *@"debug/dwarf".Data, ? error)
func (? *@"".File) @"".ImportedLibraries() (? []string, ? error)
func (? *@"".File) @"".ImportedSymbols() (? []string, ? error)
func (? *@"".File) @"".Section(@"".name string) (? *@"".Section)
type @"".FileHeader struct { @"".Machine uint16; @"".NumberOfSections uint16; @"".TimeDateStamp uint32; @"".PointerToSymbolTable uint32; @"".NumberOfSymbols uint32; @"".SizeOfOptionalHeader uint16; @"".Characteristics uint16 }
type @"".FormatError struct { @"".off int64; @"".msg string; @"".val interface {  } }
func (? *@"".FormatError) @"".Error() (? string)
const @"".IMAGE_FILE_MACHINE_AM33 = 0x1d3
const @"".IMAGE_FILE_MACHINE_AMD64 = 0x8664
const @"".IMAGE_FILE_MACHINE_ARM = 0x1c0
const @"".IMAGE_FILE_MACHINE_EBC = 0xebc
const @"".IMAGE_FILE_MACHINE_I386 = 0x14c
const @"".IMAGE_FILE_MACHINE_IA64 = 0x200
const @"".IMAGE_FILE_MACHINE_M32R = 0x9041
const @"".IMAGE_FILE_MACHINE_MIPS16 = 0x266
const @"".IMAGE_FILE_MACHINE_MIPSFPU = 0x366
const @"".IMAGE_FILE_MACHINE_MIPSFPU16 = 0x466
const @"".IMAGE_FILE_MACHINE_POWERPC = 0x1f0
const @"".IMAGE_FILE_MACHINE_POWERPCFP = 0x1f1
const @"".IMAGE_FILE_MACHINE_R4000 = 0x166
const @"".IMAGE_FILE_MACHINE_SH3 = 0x1a2
const @"".IMAGE_FILE_MACHINE_SH3DSP = 0x1a3
const @"".IMAGE_FILE_MACHINE_SH4 = 0x1a6
const @"".IMAGE_FILE_MACHINE_SH5 = 0x1a8
const @"".IMAGE_FILE_MACHINE_THUMB = 0x1c2
const @"".IMAGE_FILE_MACHINE_UNKNOWN = 0x0
const @"".IMAGE_FILE_MACHINE_WCEMIPSV2 = 0x169
type @"".ImportDirectory struct { @"".OriginalFirstThunk uint32; @"".TimeDateStamp uint32; @"".ForwarderChain uint32; @"".Name uint32; @"".FirstThunk uint32; @"".dll string }
func @"".NewFile(@"".r @"io".ReaderAt) (? *@"".File, ? error)
func @"".Open(@"".name string) (? *@"".File, ? error)
type @"".OptionalHeader32 struct { @"".Magic uint16; @"".MajorLinkerVersion uint8; @"".MinorLinkerVersion uint8; @"".SizeOfCode uint32; @"".SizeOfInitializedData uint32; @"".SizeOfUninitializedData uint32; @"".AddressOfEntryPoint uint32; @"".BaseOfCode uint32; @"".BaseOfData uint32; @"".ImageBase uint32; @"".SectionAlignment uint32; @"".FileAlignment uint32; @"".MajorOperatingSystemVersion uint16; @"".MinorOperatingSystemVersion uint16; @"".MajorImageVersion uint16; @"".MinorImageVersion uint16; @"".MajorSubsystemVersion uint16; @"".MinorSubsystemVersion uint16; @"".Win32VersionValue uint32; @"".SizeOfImage uint32; @"".SizeOfHeaders uint32; @"".CheckSum uint32; @"".Subsystem uint16; @"".DllCharacteristics uint16; @"".SizeOfStackReserve uint32; @"".SizeOfStackCommit uint32; @"".SizeOfHeapReserve uint32; @"".SizeOfHeapCommit uint32; @"".LoaderFlags uint32; @"".NumberOfRvaAndSizes uint32; @"".DataDirectory [16]@"".DataDirectory }
type @"".OptionalHeader64 struct { @"".Magic uint16; @"".MajorLinkerVersion uint8; @"".MinorLinkerVersion uint8; @"".SizeOfCode uint32; @"".SizeOfInitializedData uint32; @"".SizeOfUninitializedData uint32; @"".AddressOfEntryPoint uint32; @"".BaseOfCode uint32; @"".ImageBase uint64; @"".SectionAlignment uint32; @"".FileAlignment uint32; @"".MajorOperatingSystemVersion uint16; @"".MinorOperatingSystemVersion uint16; @"".MajorImageVersion uint16; @"".MinorImageVersion uint16; @"".MajorSubsystemVersion uint16; @"".MinorSubsystemVersion uint16; @"".Win32VersionValue uint32; @"".SizeOfImage uint32; @"".SizeOfHeaders uint32; @"".CheckSum uint32; @"".Subsystem uint16; @"".DllCharacteristics uint16; @"".SizeOfStackReserve uint64; @"".SizeOfStackCommit uint64; @"".SizeOfHeapReserve uint64; @"".SizeOfHeapCommit uint64; @"".LoaderFlags uint32; @"".NumberOfRvaAndSizes uint32; @"".DataDirectory [16]@"".DataDirectory }
type @"".Section struct { ? @"".SectionHeader; ? @"io".ReaderAt; @"".sr *@"io".SectionReader }
func (? *@"".Section) @"".Data() (? []byte, ? error)
func (? *@"".Section) @"".Open() (? @"io".ReadSeeker)
type @"".SectionHeader struct { @"".Name string; @"".VirtualSize uint32; @"".VirtualAddress uint32; @"".Size uint32; @"".Offset uint32; @"".PointerToRelocations uint32; @"".PointerToLineNumbers uint32; @"".NumberOfRelocations uint16; @"".NumberOfLineNumbers uint16; @"".Characteristics uint32 }
type @"".SectionHeader32 struct { @"".Name [8]uint8; @"".VirtualSize uint32; @"".VirtualAddress uint32; @"".SizeOfRawData uint32; @"".PointerToRawData uint32; @"".PointerToRelocations uint32; @"".PointerToLineNumbers uint32; @"".NumberOfRelocations uint16; @"".NumberOfLineNumbers uint16; @"".Characteristics uint32 }
type @"".Symbol struct { @"".Name string; @"".Value uint32; @"".SectionNumber int16; @"".Type uint16; @"".StorageClass uint8 }
type @"io".Closer interface { @"io".Close() (? error) }
type @"debug/dwarf".Data struct { @"debug/dwarf".abbrev []byte; @"debug/dwarf".aranges []byte; @"debug/dwarf".frame []byte; @"debug/dwarf".info []byte; @"debug/dwarf".line []byte; @"debug/dwarf".pubnames []byte; @"debug/dwarf".ranges []byte; @"debug/dwarf".str []byte; @"debug/dwarf".abbrevCache map[uint32]@"debug/dwarf".abbrevTable; @"debug/dwarf".order @"encoding/binary".ByteOrder; @"debug/dwarf".typeCache map[@"debug/dwarf".Offset]@"debug/dwarf".Type; @"debug/dwarf".typeSigs map[uint64]*@"debug/dwarf".typeUnit; @"debug/dwarf".unit []@"debug/dwarf".unit }
func (? *@"debug/dwarf".Data) @"debug/dwarf".AddTypes(@"debug/dwarf".name string, @"debug/dwarf".types []byte) (? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".Reader() (? *@"debug/dwarf".Reader)
func (? *@"debug/dwarf".Data) @"debug/dwarf".Type(@"debug/dwarf".off @"debug/dwarf".Offset) (? @"debug/dwarf".Type, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".parseAbbrev(@"debug/dwarf".off uint32) (? @"debug/dwarf".abbrevTable, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".parseTypes(@"debug/dwarf".name string, @"debug/dwarf".types []byte) (? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".parseUnits() (? []@"debug/dwarf".unit, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".readType(@"debug/dwarf".name string, @"debug/dwarf".r @"debug/dwarf".typeReader, @"debug/dwarf".off @"debug/dwarf".Offset, @"debug/dwarf".typeCache map[@"debug/dwarf".Offset]@"debug/dwarf".Type) (? @"debug/dwarf".Type, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".sigToType(@"debug/dwarf".sig uint64) (? @"debug/dwarf".Type, ? error)
type @"io".ReaderAt interface { @"io".ReadAt(@"io".p []byte, @"io".off int64) (@"io".n int, @"io".err error) }
type @"io".SectionReader struct { @"io".r @"io".ReaderAt; @"io".base int64; @"io".off int64; @"io".limit int64 }
func (? *@"io".SectionReader) @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error)
func (? *@"io".SectionReader) @"io".ReadAt(@"io".p []byte, @"io".off int64) (@"io".n int, @"io".err error)
func (? *@"io".SectionReader) @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error)
func (? *@"io".SectionReader) @"io".Size() (? int64)
type @"io".ReadSeeker interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error) }
type @"debug/dwarf".abbrevTable map[uint32]@"debug/dwarf".abbrev
type @"encoding/binary".ByteOrder interface { @"encoding/binary".PutUint16(? []byte, ? uint16) (); @"encoding/binary".PutUint32(? []byte, ? uint32) (); @"encoding/binary".PutUint64(? []byte, ? uint64) (); @"encoding/binary".String() (? string); @"encoding/binary".Uint16(? []byte) (? uint16); @"encoding/binary".Uint32(? []byte) (? uint32); @"encoding/binary".Uint64(? []byte) (? uint64) }
type @"debug/dwarf".Offset uint32
type @"debug/dwarf".Type interface { @"debug/dwarf".Common() (? *@"debug/dwarf".CommonType); @"debug/dwarf".Size() (? int64); @"debug/dwarf".String() (? string) }
type @"debug/dwarf".typeUnit struct { ? @"debug/dwarf".unit; @"debug/dwarf".toff @"debug/dwarf".Offset; @"debug/dwarf".name string; @"debug/dwarf".cache @"debug/dwarf".Type }
type @"debug/dwarf".unit struct { @"debug/dwarf".base @"debug/dwarf".Offset; @"debug/dwarf".off @"debug/dwarf".Offset; @"debug/dwarf".data []byte; @"debug/dwarf".atable @"debug/dwarf".abbrevTable; @"debug/dwarf".asize int; @"debug/dwarf".vers int; @"debug/dwarf".is64 bool }
func (? *@"debug/dwarf".unit) @"debug/dwarf".addrsize() (? int)
func (? *@"debug/dwarf".unit) @"debug/dwarf".dwarf64() (? bool, ? bool)
func (? *@"debug/dwarf".unit) @"debug/dwarf".version() (? int)
type @"debug/dwarf".Reader struct { @"debug/dwarf".b @"debug/dwarf".buf; @"debug/dwarf".d *@"debug/dwarf".Data; @"debug/dwarf".err error; @"debug/dwarf".unit int; @"debug/dwarf".lastChildren bool; @"debug/dwarf".lastSibling @"debug/dwarf".Offset }
func (? *@"debug/dwarf".Reader) @"debug/dwarf".Next() (? *@"debug/dwarf".Entry, ? error)
func (? *@"debug/dwarf".Reader) @"debug/dwarf".Seek(@"debug/dwarf".off @"debug/dwarf".Offset) ()
func (? *@"debug/dwarf".Reader) @"debug/dwarf".SkipChildren() ()
func (? *@"debug/dwarf".Reader) @"debug/dwarf".clone() (? @"debug/dwarf".typeReader)
func (? *@"debug/dwarf".Reader) @"debug/dwarf".maybeNextUnit() ()
func (? *@"debug/dwarf".Reader) @"debug/dwarf".offset() (? @"debug/dwarf".Offset)
type @"debug/dwarf".typeReader interface { @"debug/dwarf".Next() (? *@"debug/dwarf".Entry, ? error); @"debug/dwarf".Seek(? @"debug/dwarf".Offset) (); @"debug/dwarf".clone() (? @"debug/dwarf".typeReader); @"debug/dwarf".offset() (? @"debug/dwarf".Offset) }
type @"debug/dwarf".abbrev struct { @"debug/dwarf".tag @"debug/dwarf".Tag; @"debug/dwarf".children bool; @"debug/dwarf".field []@"debug/dwarf".afield }
type @"debug/dwarf".CommonType struct { @"debug/dwarf".ByteSize int64; @"debug/dwarf".Name string }
func (? *@"debug/dwarf".CommonType) @"debug/dwarf".Common() (? *@"debug/dwarf".CommonType)
func (? *@"debug/dwarf".CommonType) @"debug/dwarf".Size() (? int64)
type @"debug/dwarf".buf struct { @"debug/dwarf".dwarf *@"debug/dwarf".Data; @"debug/dwarf".order @"encoding/binary".ByteOrder; @"debug/dwarf".format @"debug/dwarf".dataFormat; @"debug/dwarf".name string; @"debug/dwarf".off @"debug/dwarf".Offset; @"debug/dwarf".data []byte; @"debug/dwarf".err error }
func (? *@"debug/dwarf".buf) @"debug/dwarf".addr() (? uint64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".bytes(@"debug/dwarf".n int) (? []byte)
func (? *@"debug/dwarf".buf) @"debug/dwarf".entry(@"debug/dwarf".atab @"debug/dwarf".abbrevTable, @"debug/dwarf".ubase @"debug/dwarf".Offset) (? *@"debug/dwarf".Entry)
func (? *@"debug/dwarf".buf) @"debug/dwarf".error(@"debug/dwarf".s string) ()
func (? *@"debug/dwarf".buf) @"debug/dwarf".int() (? int64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".skip(@"debug/dwarf".n int) ()
func (? *@"debug/dwarf".buf) @"debug/dwarf".string() (? string)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint() (? uint64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint16() (? uint16)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint32() (? uint32)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint64() (? uint64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint8() (? uint8)
func (? *@"debug/dwarf".buf) @"debug/dwarf".varint() (@"debug/dwarf".c uint64, @"debug/dwarf".bits uint)
type @"debug/dwarf".Entry struct { @"debug/dwarf".Offset @"debug/dwarf".Offset; @"debug/dwarf".Tag @"debug/dwarf".Tag; @"debug/dwarf".Children bool; @"debug/dwarf".Field []@"debug/dwarf".Field }
func (? *@"debug/dwarf".Entry) @"debug/dwarf".Val(@"debug/dwarf".a @"debug/dwarf".Attr) (? interface {  })
type @"debug/dwarf".Tag uint32
func (? @"debug/dwarf".Tag) @"debug/dwarf".GoString() (? string)
func (? @"debug/dwarf".Tag) @"debug/dwarf".String() (? string)
func (? *@"debug/dwarf".Tag) @"debug/dwarf".GoString() (? string)
func (? *@"debug/dwarf".Tag) @"debug/dwarf".String() (? string)
type @"debug/dwarf".afield struct { @"debug/dwarf".attr @"debug/dwarf".Attr; @"debug/dwarf".fmt @"debug/dwarf".format }
type @"debug/dwarf".dataFormat interface { @"debug/dwarf".addrsize() (? int); @"debug/dwarf".dwarf64() (@"debug/dwarf".dwarf64 bool, @"debug/dwarf".isKnown bool); @"debug/dwarf".version() (? int) }
type @"debug/dwarf".Field struct { @"debug/dwarf".Attr @"debug/dwarf".Attr; @"debug/dwarf".Val interface {  } }
type @"debug/dwarf".Attr uint32
func (? @"debug/dwarf".Attr) @"debug/dwarf".GoString() (? string)
func (? @"debug/dwarf".Attr) @"debug/dwarf".String() (? string)
func (? *@"debug/dwarf".Attr) @"debug/dwarf".GoString() (? string)
func (? *@"debug/dwarf".Attr) @"debug/dwarf".String() (? string)
type @"debug/dwarf".format uint32
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicode/utf8strconvreflectencoding/binaryunicodebytessyscallstringstimeosfmtdebug/dwarf0_0debug/dwarfA0encoding/binaryB0errorsC0fmtD0ioE0osF0strconvG0�x0�� 0H��H=$pkg.File=$newType(0,"Struct","pe.File","File","debug/pe",function(FileHeader_,OptionalHeader_,Sections_,Symbols_,closer_){this.$val=this;this.FileHeader=FileHeader_!==undefined?FileHeader_:new R.Ptr();this.OptionalHeader=OptionalHeader_!==undefined?OptionalHeader_:$ifaceNil;this.Sections=Sections_!==undefined?Sections_:($sliceType(($ptrType(J)))).nil;this.Symbols=Symbols_!==undefined?Symbols_:($sliceType(($ptrType(K)))).nil;this.closer=closer_!==undefined?closer_:$ifaceNil;});��($ptrType(H)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["DWARF","DWARF","",$funcType([],[($ptrType(A.Data)),$error],false),-1],["ImportedLibraries","ImportedLibraries","",$funcType([],[($sliceType($String)),$error],false),-1],["ImportedSymbols","ImportedSymbols","",$funcType([],[($sliceType($String)),$error],false),-1],["Section","Section","",$funcType([$String],[($ptrType(J))],false),-1]];H.init([["FileHeader","","",R,""],["OptionalHeader","OptionalHeader","",$emptyInterface,""],["Sections","Sections","",($sliceType(($ptrType(J)))),""],["Symbols","Symbols","",($sliceType(($ptrType(K)))),""],["closer","closer","debug/pe",E.Closer,""]]);0File0Udebug/dwarf:Datadebug/pe:FileHeaderdebug/pe:Sectiondebug/pe:Symbol	io:Closer 0�� 0I��I=$pkg.SectionHeader=$newType(0,"Struct","pe.SectionHeader","SectionHeader","debug/pe",function(Name_,VirtualSize_,VirtualAddress_,Size_,Offset_,PointerToRelocations_,PointerToLineNumbers_,NumberOfRelocations_,NumberOfLineNumbers_,Characteristics_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.VirtualSize=VirtualSize_!==undefined?VirtualSize_:0;this.VirtualAddress=VirtualAddress_!==undefined?VirtualAddress_:0;this.Size=Size_!==undefined?Size_:0;this.Offset=Offset_!==undefined?Offset_:0;this.PointerToRelocations=PointerToRelocations_!==undefined?PointerToRelocations_:0;this.PointerToLineNumbers=PointerToLineNumbers_!==undefined?PointerToLineNumbers_:0;this.NumberOfRelocations=NumberOfRelocations_!==undefined?NumberOfRelocations_:0;this.NumberOfLineNumbers=NumberOfLineNumbers_!==undefined?NumberOfLineNumbers_:0;this.Characteristics=Characteristics_!==undefined?Characteristics_:0;});��I.init([["Name","Name","",$String,""],["VirtualSize","VirtualSize","",$Uint32,""],["VirtualAddress","VirtualAddress","",$Uint32,""],["Size","Size","",$Uint32,""],["Offset","Offset","",$Uint32,""],["PointerToRelocations","PointerToRelocations","",$Uint32,""],["PointerToLineNumbers","PointerToLineNumbers","",$Uint32,""],["NumberOfRelocations","NumberOfRelocations","",$Uint16,""],["NumberOfLineNumbers","NumberOfLineNumbers","",$Uint16,""],["Characteristics","Characteristics","",$Uint32,""]]);0
FileHeader0  0�k 0S��S=$pkg.DataDirectory=$newType(0,"Struct","pe.DataDirectory","DataDirectory","debug/pe",function(VirtualAddress_,Size_){this.$val=this;this.VirtualAddress=VirtualAddress_!==undefined?VirtualAddress_:0;this.Size=Size_!==undefined?Size_:0;});ZS.init([["VirtualAddress","VirtualAddress","",$Uint32,""],["Size","Size","",$Uint32,""]]);0
W.init([["Name","Name","",($arrayType($Uint8,8)),""],["Value","Value","",$Uint32,""],["SectionNumber","SectionNumber","",$Int16,""],["Type","Type","",$Uint16,""],["StorageClass","StorageClass","",$Uint8,""],["NumberOfAuxSymbols","NumberOfAuxSymbols","",$Uint8,""]]);0
COFFSymbol0  0�|(*debug/pe.Section).Data0 �8J.Ptr.prototype.Data=function(){var a,b,c,d,e;  2a=this;  Xb=($sliceType($Uint8)).make($flatten64(a.sr.Size()));  zc=a.sr.ReadAt(b,new $Int64(0,0));d=c[0];e=c[1];  �    if(d===b.$length){  �e=$ifaceNil;    }  �return[$subslice(b,0,d),e];    };J.prototype.Data=function(){return this.$val.Data();}; 0	Section0debug/pe:Section 0�(*debug/pe.Section).Open0 ��J.Ptr.prototype.Open=function(){var a;  a=this;  6return E.NewSectionReader(a.sr,new $Int64(0,0),new $Int64(2147483647,4294967295));    };J.prototype.Open=function(){return this.$val.Open();}; 0	Section0'debug/pe:Sectionio:NewSectionReader 0��(*debug/pe.FormatError).Error0 �jM.Ptr.prototype.Error=function(){var a,b;  �a=this;  �b=a.msg;  �    if(!($interfaceIsEqual(a.val,$ifaceNil))){  �b=b+(D.Sprintf(" '%v'",new($sliceType($emptyInterface))([a.val])));    }  b=b+(D.Sprintf(" in record at byte %#x",new($sliceType($emptyInterface))([a.off])));  Qreturn b;    };M.prototype.Error=function(){return this.$val.Error();}; 0
  
b=$ifaceNil;  
(    if(!($interfaceIsEqual(a.closer,$ifaceNil))){  
?b=a.closer.Close();  
Xa.closer=$ifaceNil;    }  
kreturn b;    };H.prototype.Close=function(){return this.$val.Close();}; 0File0
�b=new H.Ptr();  c=E.NewSectionReader(a,new $Int64(0,0),new $Int64(2147483647,4294967295));  3  7d=($arrayType($Uint8,96)).zero();$copy(d,($arrayType($Uint8,96)).zero(),($arrayType($Uint8,96)));  K  Ne=a.ReadAt($subslice(new($sliceType($Uint8))(d),0),new $Int64(0,0));f=e[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �return[($ptrType(H)).nil,f];    }  �  �g=new $Int64(0,0);  �    if((d[0]===77)&&(d[1]===90)){  �h=new $Int64(0,B.LittleEndian.Uint32($subslice(new($sliceType($Uint8))(d),60)));    i=($arrayType($Uint8,4)).zero();$copy(i,($arrayType($Uint8,4)).zero(),($arrayType($Uint8,4)));  -a.ReadAt(new($sliceType($Uint8))(i),h);  J    if(!((i[0]===80)&&(i[1]===69)&&(i[2]===0)&&(i[3]===0))){  �return[($ptrType(H)).nil,C.New("Invalid PE File Format.")];    }  �g=new $Int64(h.$high+0,h.$low+4);    }else{  �g=new $Int64(0,0);    }  
errors:New
fmt:Errorfio:NewSectionReaderstrconv:Atoi 0�debug/pe.cstring0P��P=function(a){var b;  2  6b=0;  =  Ab=0;while(b<a.$length&&!((((b<0||b>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+b])===0))){      a  ab=b+(1)>>0;}  kreturn $bytesToString($subslice(a,0,b));    }; 0	cstring0  0�|debug/pe.getString0Q�KQ=function(a,b){var c;  �    if(b<0||b>=a.$length){  #return["",false];    }  9  =c=b;while(c<a.$length){  i    if(((c<0||c>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+c])===0){  �return[$bytesToString($subslice(a,b,c)),true];    }      _  _c=c+(1)>>0;}  �return["",false];    }; 0	getString0  0��(*debug/pe.File).Section0 �cH.Ptr.prototype.Section=function(a){var b,c,d,e;  ,b=this;  Vc=b.Sections;d=0;while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  w    if(e.SectionHeader.Name===a){  �return e;    }    d++;}  �return($ptrType(J)).nil;    };H.prototype.Section=function(a){return this.$val.Section(a);}; 0File0!
  "h=new L.Ptr();$copy(h,new L.Ptr(),L);  "#h.OriginalFirstThunk=B.LittleEndian.Uint32($subslice(e,0,4));  "`h.Name=B.LittleEndian.Uint32($subslice(e,12,16));  "�h.FirstThunk=B.LittleEndian.Uint32($subslice(e,16,20));  "�e=$subslice(e,20);  "�    if(h.OriginalFirstThunk===0){  "�break;    }  #g=$append(g,h);    }  #i=c.Data();j=i[0];  #5  #9k=($sliceType($String)).nil;  #Gl=g;m=0;while(m<l.$length){n=new L.Ptr();$copy(n,((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]),L);  #bo=Q(j,((n.Name-c.SectionHeader.VirtualAddress>>>0)>>0));n.dll=o[0];  #�p=c.Data();e=p[0];  #�e=$subslice(e,(n.OriginalFirstThunk-c.SectionHeader.VirtualAddress>>>0));  $while(e.$length>0){  $    if(b){  $1q=B.LittleEndian.Uint64($subslice(e,0,8));  $^e=$subslice(e,8);  $l    if((q.$high===0&&q.$low===0)){  $~break;    }  $�    if((r=new $Uint64(q.$high&2147483648,(q.$low&0)>>>0),(r.$high>0||(r.$high===0&&r.$low>0)))){    }else{  $�s=Q(j,((((q.$low>>>0)-c.SectionHeader.VirtualAddress>>>0)+2>>>0)>>0));t=s[0];  %=k=$append(k,t+":"+n.dll);    }    }else{  %}u=B.LittleEndian.Uint32($subslice(e,0,4));  %�e=$subslice(e,4);  %�    if(u===0){  %�break;    }  %�    if(((u&2147483648)>>>0)>0){    }else{  &Yv=Q(j,(((u-c.SectionHeader.VirtualAddress>>>0)+2>>>0)>>0));w=v[0];  &�k=$append(k,w+":"+n.dll);    }    }    }    m++;}  &�return[k,$ifaceNil];    };H.prototype.ImportedSymbols=function(){return this.$val.ImportedSymbols();}; 0File0m
�{"Base":14333,"Files":[{"Name":"/usr/local/go/src/pkg/debug/pe/file.go","Base":1,"Size":10256,"Lines":[0,56,110,160,161,246,257,258,267,282,301,311,318,324,330,341,351,353,354,392,411,423,501,528,554,555,573,575,576,604,633,662,691,720,749,778,807,836,865,894,896,897,919,934,935,973,1013,1048,1096,1146,1170,1183,1205,1207,1208,1229,1251,1273,1294,1316,1337,1339,1340,1370,1397,1424,1451,1478,1505,1506,1518,1520,1521,1579,1622,1656,1687,1707,1719,1722,1744,1746,1747,1804,1892,1893,1919,1930,1942,1959,1961,1962,2001,2015,2034,2071,2074,2127,2139,2141,2142,2225,2265,2290,2307,2325,2328,2351,2368,2380,2398,2401,2416,2432,2434,2435,2461,2528,2552,2583,2598,2620,2645,2662,2665,2677,2679,2680,2761,2806,2822,2864,2865,2889,2944,2962,2965,2981,3030,3095,3114,3143,3218,3271,3275,3296,3306,3324,3327,3355,3432,3450,3453,3613,3665,3668,3669,3684,3723,3805,3914,3929,3996,4015,4019,4042,4170,4189,4193,4194,4226,4291,4309,4368,4393,4461,4481,4486,4502,4512,4525,4530,4549,4630,4685,4717,4729,4760,4765,4796,4813,4838,4867,4904,4932,4968,4973,5009,5013,5016,5017,5043,5071,5148,5166,5169,5196,5223,5276,5303,5373,5392,5396,5431,5522,5526,5553,5580,5650,5669,5673,5709,5801,5805,5832,5835,5836,5858,5920,5979,6008,6075,6094,6098,6116,6144,6191,6222,6233,6264,6268,6288,6323,6354,6395,6439,6482,6528,6578,6628,6677,6726,6771,6775,6867,6887,6907,6910,6925,6927,6928,6960,6971,7014,7017,7040,7042,7043,7100,7159,7200,7219,7222,7223,7270,7295,7338,7342,7345,7363,7365,7366,7442,7461,7508,7540,7562,7574,7578,7581,7593,7595,7596,7642,7693,7748,7807,7857,7885,7915,7941,7964,7980,7992,7996,8017,8062,8081,8085,8098,8101,8102,8147,8209,8211,8212,8264,8319,8373,8409,8462,8509,8536,8552,8586,8604,8607,8628,8645,8663,8666,8693,8711,8736,8797,8846,8901,8914,8948,8957,8961,8985,8988,9011,9029,9055,9118,9137,9169,9219,9238,9260,9305,9319,9336,9347,9353,9402,9446,9459,9527,9565,9571,9592,9637,9651,9668,9679,9685,9726,9770,9798,9811,9871,9909,9915,9920,9924,9927,9928,9945,9947,9948,10004,10059,10107,10162,10171,10237,10254],"Infos":null},{"Name":"/usr/local/go/src/pkg/debug/pe/pe.go","Base":10258,"Size":4074,"Lines":[0,56,110,160,161,172,173,198,227,256,285,314,343,372,401,403,404,432,455,478,480,481,512,548,583,618,654,690,726,762,798,834,870,906,942,978,1014,1050,1086,1122,1158,1194,1230,1266,1302,1338,1374,1410,1446,1482,1518,1554,1590,1637,1639,1640,1671,1707,1742,1777,1813,1849,1885,1921,1957,1993,2029,2065,2101,2137,2173,2209,2245,2281,2317,2353,2389,2425,2461,2497,2533,2569,2605,2641,2677,2713,2760,2762,2763,2793,2824,2853,2882,2911,2940,2969,2998,3027,3056,3085,3087,3088,3114,3115,3140,3169,3196,3222,3249,3275,3301,3303,3304,3312,3348,3386,3425,3463,3501,3539,3577,3616,3654,3692,3730,3768,3806,3844,3882,3920,3958,3996,4034,4072],"Infos":null}]}
 �