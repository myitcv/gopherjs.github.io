p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �z���net/http/fcgifcgibufiobytesencoding/binaryerrorsfmtio	io/ioutilnetnet/httpnet/http/cgiosstringssynctime���package fcgi
import errors "errors"
import fmt "fmt"
import io "io"
import ioutil "io/ioutil"
import net "net"
import http "net/http"
import cgi "net/http/cgi"
import os "os"
import strings "strings"
import sync "sync"
import time "time"
import bufio "bufio"
import bytes "bytes"
import binary "encoding/binary"
func @"".Serve(@"".l @"net".Listener, @"".handler @"net/http".Handler) (? error)
type @"".beginRequest struct { @"".role uint16; @"".flags uint8; @"".reserved [5]uint8 }
func (? *@"".beginRequest) @"".read(@"".content []byte) (? error)
type @"".bufWriter struct { @"".closer @"io".Closer; ? *@"bufio".Writer }
func (? *@"".bufWriter) @"".Close() (? error)
type @"".child struct { @"".conn *@"".conn; @"".handler @"net/http".Handler; @"".mu @"sync".Mutex; @"".requests map[uint16]*@"".request }
func (? *@"".child) @"".handleRecord(@"".rec *@"".record) (? error)
func (? *@"".child) @"".serve() ()
func (? *@"".child) @"".serveRequest(@"".req *@"".request, @"".body @"io".ReadCloser) ()
type @"".conn struct { @"".mutex @"sync".Mutex; @"".rwc @"io".ReadWriteCloser; @"".buf @"bytes".Buffer; @"".h @"".header }
func (? *@"".conn) @"".Close() (? error)
func (? *@"".conn) @"".writeBeginRequest(@"".reqId uint16, @"".role uint16, @"".flags uint8) (? error)
func (? *@"".conn) @"".writeEndRequest(@"".reqId uint16, @"".appStatus int, @"".protocolStatus uint8) (? error)
func (? *@"".conn) @"".writePairs(@"".recType @"".recType, @"".reqId uint16, @"".pairs map[string]string) (? error)
func (? *@"".conn) @"".writeRecord(@"".recType @"".recType, @"".reqId uint16, @"".b []byte) (? error)
type @"".header struct { @"".Version uint8; @"".Type @"".recType; @"".Id uint16; @"".ContentLength uint16; @"".PaddingLength uint8; @"".Reserved uint8 }
func (? *@"".header) @"".init(@"".recType @"".recType, @"".reqId uint16, @"".contentLength int) ()
type @"".recType uint8
type @"".record struct { @"".h @"".header; @"".buf [65790]byte }
func (? *@"".record) @"".content() (? []byte)
func (? *@"".record) @"".read(@"".r @"io".Reader) (@"".err error)
type @"".request struct { @"".pw *@"io".PipeWriter; @"".reqId uint16; @"".params map[string]string; @"".buf [1024]byte; @"".rawParams []byte; @"".keepConn bool }
func (? *@"".request) @"".parseParams() ()
type @"".response struct { @"".req *@"".request; @"".header @"net/http".Header; @"".w *@"".bufWriter; @"".wroteHeader bool }
func (? *@"".response) @"".Close() (? error)
func (? *@"".response) @"".Flush() ()
func (? *@"".response) @"".Header() (? @"net/http".Header)
func (? *@"".response) @"".Write(@"".data []byte) (? int, ? error)
func (? *@"".response) @"".WriteHeader(@"".code int) ()
type @"".streamWriter struct { @"".c *@"".conn; @"".recType @"".recType; @"".reqId uint16 }
func (? *@"".streamWriter) @"".Close() (? error)
func (? *@"".streamWriter) @"".Write(@"".p []byte) (? int, ? error)
type @"net".Listener interface { @"net".Accept() (@"net".c @"net".Conn, @"net".err error); @"net".Addr() (? @"net".Addr); @"net".Close() (? error) }
type @"net/http".Handler interface { @"net/http".ServeHTTP(? @"net/http".ResponseWriter, ? *@"net/http".Request) () }
type @"io".Closer interface { @"io".Close() (? error) }
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"".p []byte) (@"".nn int, @"".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"".r rune) (@"".size int, @"".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"io".ReadWriteCloser interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"".c byte, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"".r rune, @"".size int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"".delim byte) (@"".line string, @"".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"".r rune) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"".s string) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"".w @"io".Writer) (@"".n int64, @"".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"".delim byte) (@"".line []byte, @"".err error)
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"io".PipeWriter struct { @"io".p *@"io".pipe }
func (? *@"io".PipeWriter) @"io".Close() (? error)
func (? *@"io".PipeWriter) @"io".CloseWithError(@"".err error) (? error)
func (? *@"io".PipeWriter) @"io".Write(@"".data []byte) (@"".n int, @"".err error)
type @"net/http".Header map[string][]string
func (? @"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? @"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? @"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? @"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? @"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
func (? *@"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? *@"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? *@"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? *@"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
type @"net/http".ResponseWriter interface { @"net/http".Header() (? @"net/http".Header); @"net/http".Write(? []byte) (? int, ? error); @"net/http".WriteHeader(? int) () }
import url "net/url"
import multipart "mime/multipart"
import tls "crypto/tls"
type @"net/http".Request struct { @"net/http".Method string; @"net/http".URL *@"net/url".URL; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Host string; @"net/http".Form @"net/url".Values; @"net/http".PostForm @"net/url".Values; @"net/http".MultipartForm *@"mime/multipart".Form; @"net/http".Trailer @"net/http".Header; @"net/http".RemoteAddr string; @"net/http".RequestURI string; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Request) @"net/http".AddCookie(@"net/http".c *@"net/http".Cookie) ()
func (? *@"net/http".Request) @"net/http".BasicAuth() (@"net/http".username string, @"net/http".password string, @"net/http".ok bool)
func (? *@"net/http".Request) @"net/http".Cookie(@"net/http".name string) (? *@"net/http".Cookie, ? error)
func (? *@"net/http".Request) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Request) @"net/http".FormFile(@"net/http".key string) (? @"mime/multipart".File, ? *@"mime/multipart".FileHeader, ? error)
func (? *@"net/http".Request) @"net/http".FormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".MultipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".ParseForm() (? error)
func (? *@"net/http".Request) @"net/http".ParseMultipartForm(@"net/http".maxMemory int64) (? error)
func (? *@"net/http".Request) @"net/http".PostFormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Request) @"net/http".Referer() (? string)
func (? *@"net/http".Request) @"net/http".SetBasicAuth(@"net/http".username string, @"net/http".password string) ()
func (? *@"net/http".Request) @"net/http".UserAgent() (? string)
func (? *@"net/http".Request) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".WriteProxy(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".closeBody() ()
func (? *@"net/http".Request) @"net/http".expectsContinue() (? bool)
func (? *@"net/http".Request) @"net/http".multipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".wantsClose() (? bool)
func (? *@"net/http".Request) @"net/http".wantsHttp10KeepAlive() (? bool)
func (? *@"net/http".Request) @"net/http".write(@"net/http".w @"io".Writer, @"net/http".usingProxy bool, @"net/http".extraHeaders @"net/http".Header) (? error)
type @"io".Writer interface { @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"bytes".readOp int
type @"io".pipe struct { @"io".rl @"sync".Mutex; @"io".wl @"sync".Mutex; @"io".l @"sync".Mutex; @"io".data []byte; @"io".rwait @"sync".Cond; @"io".wwait @"sync".Cond; @"io".rerr error; @"io".werr error }
func (? *@"io".pipe) @"io".rclose(@"".err error) ()
func (? *@"io".pipe) @"io".read(@"".b []byte) (@"".n int, @"".err error)
func (? *@"io".pipe) @"io".wclose(@"".err error) ()
func (? *@"io".pipe) @"io".write(@"".b []byte) (@"".n int, @"".err error)
type @"net/http".keyValues struct { @"net/http".key string; @"net/http".values []string }
type @"net/http".headerSorter struct { @"net/http".kvs []@"net/http".keyValues }
func (? *@"net/http".headerSorter) @"net/http".Len() (? int)
func (? *@"net/http".headerSorter) @"net/http".Less(@"net/http".i int, @"net/http".j int) (? bool)
func (? *@"net/http".headerSorter) @"net/http".Swap(@"net/http".i int, @"net/http".j int) ()
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"".years int, @"".months int, @"".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"".hour int, @"".min int, @"".sec int)
func (? @"time".Time) @"time".Date() (@"".year int, @"".month @"time".Month, @"".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"".year int, @"".week int)
func (? @"time".Time) @"time".In(@"".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"".name string, @"".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"".full bool) (@"".year int, @"".month @"time".Month, @"".day int, @"".yday int)
func (? @"time".Time) @"time".locabs() (@"".name string, @"".offset int, @"".abs uint64)
func (? *@"time".Time) @"time".Add(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"".years int, @"".months int, @"".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"".hour int, @"".min int, @"".sec int)
func (? *@"time".Time) @"time".Date() (@"".year int, @"".month @"time".Month, @"".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"".year int, @"".week int)
func (? *@"time".Time) @"time".In(@"".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"".data []byte) (@"".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"".data []byte) (@"".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"".name string, @"".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"".full bool) (@"".year int, @"".month @"time".Month, @"".day int, @"".yday int)
func (? *@"time".Time) @"time".locabs() (@"".name string, @"".offset int, @"".abs uint64)
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"".key string, @"".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"".key string, @"".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"".key string, @"".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"".key string, @"".value string) ()
type @"mime/multipart".Form struct { @"mime/multipart".Value map[string][]string; @"mime/multipart".File map[string][]*@"mime/multipart".FileHeader }
func (? *@"mime/multipart".Form) @"mime/multipart".RemoveAll() (? error)
import x509 "crypto/x509"
type @"crypto/tls".ConnectionState struct { @"crypto/tls".Version uint16; @"crypto/tls".HandshakeComplete bool; @"crypto/tls".DidResume bool; @"crypto/tls".CipherSuite uint16; @"crypto/tls".NegotiatedProtocol string; @"crypto/tls".NegotiatedProtocolIsMutual bool; @"crypto/tls".ServerName string; @"crypto/tls".PeerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".VerifiedChains [][]*@"crypto/x509".Certificate; @"crypto/tls".TLSUnique []byte }
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
type @"mime/multipart".File interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error); @"io".ReadAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error); @"io".Seek(@"".offset int64, @"".whence int) (? int64, ? error) }
import textproto "net/textproto"
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
type @"sync".Cond struct { @"sync".L @"sync".Locker; @"sync".sema @"sync".syncSema; @"sync".waiters uint32; @"sync".checker @"sync".copyChecker; @"sync".n int; @"sync".ch chan bool }
func (? *@"sync".Cond) @"sync".Broadcast() ()
func (? *@"sync".Cond) @"sync".Signal() ()
func (? *@"sync".Cond) @"sync".Wait() ()
func (? *@"sync".Cond) @"sync".signalImpl(@"".all bool) ()
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"".sec int64) (@"".name string, @"".offset int, @"".isDST bool, @"".start int64, @"".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"".name string, @"".unix int64) (@"".offset int, @"".isDST bool, @"".ok bool)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".MaxPathLenZero bool; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"".c byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"".line []byte, @"".isPrefix bool, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"".r rune, @"".size int, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"".delim byte) (@"".line string, @"".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"".w @"io".Writer) (@"".n int64, @"".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"".buf []byte, @"".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"".w @"io".Writer) (? int64, ? error)
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
type @"sync".syncSema struct { @"sync".lock uintptr; @"sync".head @"unsafe".Pointer; @"sync".tail @"unsafe".Pointer }
type @"sync".copyChecker uintptr
func (? *@"sync".copyChecker) @"sync".check() ()
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"".n int64, @"".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"".y *@"math/big".Int) (@"".r int)
func (? *@"math/big".Int) @"math/big".Div(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Format(@"".s @"fmt".State, @"".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"".text []byte, @"".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"".g *@"math/big".Int, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"".a int64, @"".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"".rnd *@"math/rand".Rand, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"".s @"fmt".ScanState, @"".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"".x *@"math/big".Int, @"".i int, @"".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"".s string, @"".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"".c int) (? bool); @"fmt".Precision() (@"".prec int, @"".ok bool); @"fmt".Width() (@"".wid int, @"".ok bool); @"fmt".Write(@"".b []byte) (@"".ret int, @"".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"".buf []byte) (@"".n int, @"".err error); @"fmt".ReadRune() (@"".r rune, @"".size int, @"".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".token []byte, @"".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"".wid int, @"".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"".r rune, @"".size int, @"".err error); @"io".UnreadRune() (? error) }
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time "asn1:\"optional\""; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
NLL=$packages["bufio"];a    $r=L.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} MM=$packages["bytes"];a    $r=M.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} NN=$packages["encoding/binary"];a    $r=N.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["errors"];a    $r=A.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["fmt"];a    $r=B.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["io"];a    $r=C.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io/ioutil"];a    $r=D.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["net"];a    $r=E.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["net/http"];a    $r=F.$init();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["net/http/cgi"];c    $r=G.$init();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["os"];c    $r=H.$init();$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} II=$packages["strings"];c    $r=I.$init();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} JJ=$packages["sync"];c    $r=J.$init();$s=13;case 13:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} KK=$packages["time"];c    $r=K.$init();$s=14;case 14:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} O��O=$pkg.request=$newType(0,$kindStruct,"fcgi.request","request","net/http/fcgi",function(pw_,reqId_,params_,buf_,rawParams_,keepConn_){this.$val=this;if(arguments.length===0){this.pw=AL.nil;this.reqId=0;this.params=false;this.buf=AM.zero();this.rawParams=AN.nil;this.keepConn=false;return;}this.pw=pw_;this.reqId=reqId_;this.params=params_;this.buf=buf_;this.rawParams=rawParams_;this.keepConn=keepConn_;});dAO.methods=[{prop:"parseParams",name:"parseParams",pkg:"net/http/fcgi",typ:$funcType([],[],false)}];��O.init([{prop:"pw",name:"pw",pkg:"net/http/fcgi",typ:AL,tag:""},{prop:"reqId",name:"reqId",pkg:"net/http/fcgi",typ:$Uint16,tag:""},{prop:"params",name:"params",pkg:"net/http/fcgi",typ:AS,tag:""},{prop:"buf",name:"buf",pkg:"net/http/fcgi",typ:AM,tag:""},{prop:"rawParams",name:"rawParams",pkg:"net/http/fcgi",typ:AN,tag:""},{prop:"keepConn",name:"keepConn",pkg:"net/http/fcgi",typ:$Bool,tag:""}]);requestnet/http/fcgi.ALnet/http/fcgi.AMnet/http/fcgi.ANnet/http/fcgi.AOnet/http/fcgi.ASnet/http/fcgi.request Q�=Q=$pkg.response=$newType(0,$kindStruct,"fcgi.response","response","net/http/fcgi",function(req_,header_,w_,wroteHeader_){this.$val=this;if(arguments.length===0){this.req=AO.nil;this.header=false;this.w=AP.nil;this.wroteHeader=false;return;}this.req=req_;this.header=header_;this.w=w_;this.wroteHeader=wroteHeader_;});�pAT.methods=[{prop:"Header",name:"Header",pkg:"",typ:$funcType([],[F.Header],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AN],[$Int,$error],false)},{prop:"WriteHeader",name:"WriteHeader",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�Q.init([{prop:"req",name:"req",pkg:"net/http/fcgi",typ:AO,tag:""},{prop:"header",name:"header",pkg:"net/http/fcgi",typ:F.Header,tag:""},{prop:"w",name:"w",pkg:"net/http/fcgi",typ:AP,tag:""},{prop:"wroteHeader",name:"wroteHeader",pkg:"net/http/fcgi",typ:$Bool,tag:""}]);responsenet/http.Headernet/http/fcgi.ANnet/http/fcgi.AOnet/http/fcgi.APnet/http/fcgi.ATnet/http/fcgi.response S�CS=$pkg.child=$newType(0,$kindStruct,"fcgi.child","child","net/http/fcgi",function(conn_,handler_,mu_,requests_){this.$val=this;if(arguments.length===0){this.conn=AR.nil;this.handler=$ifaceNil;this.mu=new J.Mutex.ptr();this.requests=false;return;}this.conn=conn_;this.handler=handler_;this.mu=mu_;this.requests=requests_;});�!AV.methods=[{prop:"serve",name:"serve",pkg:"net/http/fcgi",typ:$funcType([],[],false)},{prop:"handleRecord",name:"handleRecord",pkg:"net/http/fcgi",typ:$funcType([AU],[$error],false)},{prop:"serveRequest",name:"serveRequest",pkg:"net/http/fcgi",typ:$funcType([AO,C.ReadCloser],[],false)}];�S.init([{prop:"conn",name:"conn",pkg:"net/http/fcgi",typ:AR,tag:""},{prop:"handler",name:"handler",pkg:"net/http/fcgi",typ:F.Handler,tag:""},{prop:"mu",name:"mu",pkg:"net/http/fcgi",typ:J.Mutex,tag:""},{prop:"requests",name:"requests",pkg:"net/http/fcgi",typ:AW,tag:""}]);child
io.ReadClosernet/http.Handlernet/http/fcgi.AOnet/http/fcgi.ARnet/http/fcgi.AUnet/http/fcgi.AVnet/http/fcgi.AWnet/http/fcgi.childnet/http/fcgi.record
sync.Mutex XTX=$pkg.recType=$newType(1,$kindUint8,"fcgi.recType","recType","net/http/fcgi",null);recTypenet/http/fcgi.recType Y��Y=$pkg.header=$newType(0,$kindStruct,"fcgi.header","header","net/http/fcgi",function(Version_,Type_,Id_,ContentLength_,PaddingLength_,Reserved_){this.$val=this;if(arguments.length===0){this.Version=0;this.Type=0;this.Id=0;this.ContentLength=0;this.PaddingLength=0;this.Reserved=0;return;}this.Version=Version_;this.Type=Type_;this.Id=Id_;this.ContentLength=ContentLength_;this.PaddingLength=PaddingLength_;this.Reserved=Reserved_;});dAX.methods=[{prop:"init",name:"init",pkg:"net/http/fcgi",typ:$funcType([X,$Uint16,$Int],[],false)}];�gY.init([{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:X,tag:""},{prop:"Id",name:"Id",pkg:"",typ:$Uint16,tag:""},{prop:"ContentLength",name:"ContentLength",pkg:"",typ:$Uint16,tag:""},{prop:"PaddingLength",name:"PaddingLength",pkg:"",typ:$Uint8,tag:""},{prop:"Reserved",name:"Reserved",pkg:"",typ:$Uint8,tag:""}]);headernet/http/fcgi.AXnet/http/fcgi.headernet/http/fcgi.recType Z�Z=$pkg.beginRequest=$newType(0,$kindStruct,"fcgi.beginRequest","beginRequest","net/http/fcgi",function(role_,flags_,reserved_){this.$val=this;if(arguments.length===0){this.role=0;this.flags=0;this.reserved=AY.zero();return;}this.role=role_;this.flags=flags_;this.reserved=reserved_;});^AZ.methods=[{prop:"read",name:"read",pkg:"net/http/fcgi",typ:$funcType([AN],[$error],false)}];��Z.init([{prop:"role",name:"role",pkg:"net/http/fcgi",typ:$Uint16,tag:""},{prop:"flags",name:"flags",pkg:"net/http/fcgi",typ:$Uint8,tag:""},{prop:"reserved",name:"reserved",pkg:"net/http/fcgi",typ:AY,tag:""}]);beginRequestnet/http/fcgi.ANnet/http/fcgi.AYnet/http/fcgi.AZnet/http/fcgi.beginRequest AB�/AB=$pkg.conn=$newType(0,$kindStruct,"fcgi.conn","conn","net/http/fcgi",function(mutex_,rwc_,buf_,h_){this.$val=this;if(arguments.length===0){this.mutex=new J.Mutex.ptr();this.rwc=$ifaceNil;this.buf=new M.Buffer.ptr();this.h=new Y.ptr();return;}this.mutex=mutex_;this.rwc=rwc_;this.buf=buf_;this.h=h_;});�AR.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"writeRecord",name:"writeRecord",pkg:"net/http/fcgi",typ:$funcType([X,$Uint16,AN],[$error],false)},{prop:"writeBeginRequest",name:"writeBeginRequest",pkg:"net/http/fcgi",typ:$funcType([$Uint16,$Uint16,$Uint8],[$error],false)},{prop:"writeEndRequest",name:"writeEndRequest",pkg:"net/http/fcgi",typ:$funcType([$Uint16,$Int,$Uint8],[$error],false)},{prop:"writePairs",name:"writePairs",pkg:"net/http/fcgi",typ:$funcType([X,$Uint16,AS],[$error],false)}];�AB.init([{prop:"mutex",name:"mutex",pkg:"net/http/fcgi",typ:J.Mutex,tag:""},{prop:"rwc",name:"rwc",pkg:"net/http/fcgi",typ:C.ReadWriteCloser,tag:""},{prop:"buf",name:"buf",pkg:"net/http/fcgi",typ:M.Buffer,tag:""},{prop:"h",name:"h",pkg:"net/http/fcgi",typ:Y,tag:""}]);conn	bytes.Bufferio.ReadWriteClosernet/http/fcgi.ANnet/http/fcgi.ARnet/http/fcgi.ASnet/http/fcgi.connnet/http/fcgi.headernet/http/fcgi.recType
sync.Mutex AD��AD=$pkg.record=$newType(0,$kindStruct,"fcgi.record","record","net/http/fcgi",function(h_,buf_){this.$val=this;if(arguments.length===0){this.h=new Y.ptr();this.buf=BA.zero();return;}this.h=h_;this.buf=buf_;});��AU.methods=[{prop:"read",name:"read",pkg:"net/http/fcgi",typ:$funcType([C.Reader],[$error],false)},{prop:"content",name:"content",pkg:"net/http/fcgi",typ:$funcType([],[AN],false)}];zAD.init([{prop:"h",name:"h",pkg:"net/http/fcgi",typ:Y,tag:""},{prop:"buf",name:"buf",pkg:"net/http/fcgi",typ:BA,tag:""}]);record	io.Readernet/http/fcgi.ANnet/http/fcgi.AUnet/http/fcgi.BAnet/http/fcgi.headernet/http/fcgi.record AH��AH=$pkg.bufWriter=$newType(0,$kindStruct,"fcgi.bufWriter","bufWriter","net/http/fcgi",function(closer_,Writer_){this.$val=this;if(arguments.length===0){this.closer=$ifaceNil;this.Writer=BB.nil;return;}this.closer=closer_;this.Writer=Writer_;});QAP.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];~AH.init([{prop:"closer",name:"closer",pkg:"net/http/fcgi",typ:C.Closer,tag:""},{prop:"Writer",name:"",pkg:"",typ:BB,tag:""}]);	bufWriterbufio.Writer	io.Closernet/http/fcgi.APnet/http/fcgi.BBnet/http/fcgi.bufWriter AJ�AJ=$pkg.streamWriter=$newType(0,$kindStruct,"fcgi.streamWriter","streamWriter","net/http/fcgi",function(c_,recType_,reqId_){this.$val=this;if(arguments.length===0){this.c=AR.nil;this.recType=0;this.reqId=0;return;}this.c=c_;this.recType=recType_;this.reqId=reqId_;});��BC.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([AN],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];��AJ.init([{prop:"c",name:"c",pkg:"net/http/fcgi",typ:AR,tag:""},{prop:"recType",name:"recType",pkg:"net/http/fcgi",typ:X,tag:""},{prop:"reqId",name:"reqId",pkg:"net/http/fcgi",typ:$Uint16,tag:""}]);streamWriternet/http/fcgi.ANnet/http/fcgi.ARnet/http/fcgi.BCnet/http/fcgi.recTypenet/http/fcgi.streamWriter AKAK=$arrayType($Uint8,255);AK ALAL=$ptrType(C.PipeWriter);ALio.PipeWriter AMAM=$arrayType($Uint8,1024);AM ANAN=$sliceType($Uint8);AN AOAO=$ptrType(O);AOnet/http/fcgi.request APAP=$ptrType(AH);APnet/http/fcgi.bufWriter AQAQ=$sliceType($emptyInterface);AQ ARAR=$ptrType(AB);ARnet/http/fcgi.conn ASAS=$mapType($String,$String);AS ATAT=$ptrType(Q);ATnet/http/fcgi.response AUAU=$ptrType(AD);AUnet/http/fcgi.record AVAV=$ptrType(S);AVnet/http/fcgi.child AWAW=$mapType($Uint16,AO);AWnet/http/fcgi.AO AXAX=$ptrType(Y);AXnet/http/fcgi.header AYAY=$arrayType($Uint8,5);AY AZAZ=$ptrType(Z);AZnet/http/fcgi.beginRequest BABA=$arrayType($Uint8,65790);BA BBBB=$ptrType(L.Writer);BBbufio.Writer BCBC=$ptrType(AJ);BCnet/http/fcgi.streamWriter UerrCloseConn V	emptyBody AAAA=AK.zero();padnet/http/fcgi.AKnet/http/fcgi.pad 2    U=A.New("fcgi: connection should be closed");
errors.Newnet/http/fcgi.errCloseConn $    V=D.NopCloser(I.NewReader(""));io/ioutil.NopClosernet/http/fcgi.emptyBodystrings.NewReader net/http/fcgi.newRequestP��P=function(a,b){var $ptr,a,b,c,d,e;      �e=new O.ptr(AL.nil,a,(c=new $Map(),c),AM.zero(),AN.nil,!((((b&1)>>>0)===0)));  !e.rawParams=$subslice(new AN(e.buf),0,0);  :return e;    };
newRequestio.PipeWriternet/http/fcgi.ALnet/http/fcgi.AMnet/http/fcgi.ANnet/http/fcgi.newRequestnet/http/fcgi.request $(*net/http/fcgi.request).parseParams�KO.ptr.prototype.parseParams=function(){var $ptr,a,b,c,d,e,f,g,h,i,j;  �a=this;      �b=a.rawParams;  �a.rawParams=AN.nil;  �while(true){if(!(b.$length>0)){break;}  �c=AE(b);d=c[0];e=c[1];  �    if(e===0){  return;    }  b=$subslice(b,e);  'f=AE(b);g=f[0];e=f[1];  E    if(e===0){  Treturn;    }  ab=$subslice(b,e);  sh=AF(b,d);  �b=$subslice(b,d);  �i=AF(b,g);  �b=$subslice(b,g);  �j=h;(a.params||$throwRuntimeError("assignment to entry in nil map"))[j]={k:j,v:i};    }    };O.prototype.parseParams=function(){return this.$val.parseParams();};requestparseParams~net/http/fcgi.ANnet/http/fcgi.readSizenet/http/fcgi.readStringnet/http/fcgi.request net/http/fcgi.newResponseRrR=function(a,b){var $ptr,a,b,c,d;      �return new Q.ptr(b,(c=new $Map(),c),AI(a.conn,6,b.reqId),false);    };newResponsenet/http/fcgi.AOnet/http/fcgi.APnet/http/fcgi.bufWriternet/http/fcgi.newResponsenet/http/fcgi.newWriternet/http/fcgi.requestnet/http/fcgi.response  (*net/http/fcgi.response).Header��Q.ptr.prototype.Header=function(){var $ptr,a;  Na=this;      sreturn a.header;    };Q.prototype.Header=function(){return this.$val.Header();};responsenet/http/fcgi.response (*net/http/fcgi.response).Write��Q.ptr.prototype.Write=function $b(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;      �if(!b.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  �$r=b.WriteHeader(200);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:  �c=b.w.Writer.Write(a);$s=4;case 4:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Write=function(a){return this.$val.Write(a);};responsenet/http/fcgi.response %(*net/http/fcgi.response).WriteHeader�}Q.ptr.prototype.WriteHeader=function $b(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  b=this;      9    if(b.wroteHeader){  Nreturn;    }  Yb.wroteHeader=true;  o    if(a===304){  �new F.Header(b.header).Del("Content-Type");  �new F.Header(b.header).Del("Content-Length");  �new F.Header(b.header).Del("Transfer-Encoding");        }else if(new F.Header(b.header).Get("Content-Type")===""){  Bnew F.Header(b.header).Set("Content-Type","text/html; charset=utf-8");    }  �if(new F.Header(b.header).Get("Date")===""){$s=1;continue;}$s=2;continue;    case 1:  �c=K.Now().UTC().Format("Mon, 02 Jan 2006 15:04:05 GMT");$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;$r=new F.Header(b.header).Set("Date",d);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:  �e=B.Fprintf(b.w,"Status: %d %s\r\n",new AQ([new $Int(a),new $String(F.StatusText(a))]));$s=5;case 5:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  	*f=new F.Header(b.header).Write(b.w);$s=6;case 6:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  	?g=b.w.Writer.WriteString("\r\n");$s=7;case 7:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}g;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.WriteHeader=function(a){return this.$val.WriteHeader(a);};responsefmt.Fprintfnet/http.Headernet/http.StatusTextnet/http/fcgi.AQnet/http/fcgi.responsetime.Now (*net/http/fcgi.response).Flush��Q.ptr.prototype.Flush=function $b(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  	`a=this;      	xif(!a.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  	�$r=a.WriteHeader(200);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:  	�b=a.w.Writer.Flush();$s=4;case 4:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Flush=function(){return this.$val.Flush();};responsenet/http/fcgi.response (*net/http/fcgi.response).Close�\Q.ptr.prototype.Close=function $b(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  	�a=this;      	�$r=a.Flush();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  	�b=a.w.Close();$s=2;case 2:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Close=function(){return this.$val.Close();};responsenet/http/fcgi.response net/http/fcgi.newChildTeT=function(a,b){var $ptr,a,b;      
�return new S.ptr(AC(a),b,new J.Mutex.ptr(),new $Map());    };newChildnet/http/fcgi.ARnet/http/fcgi.childnet/http/fcgi.connnet/http/fcgi.newChildnet/http/fcgi.newConn
sync.Mutex (*net/http/fcgi.child).serve�S.ptr.prototype.serve=function $b(){var $ptr,a,b,c,d,e,f,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=[a];  `b=this;      u$deferred.push([$methodVal(b.conn,"Close"),[]]);  �  �a[0]=$clone(new AD.ptr(),AD);  �case 1:  �  �c=a[0].read(b.conn.rwc);$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  �return;    case 5:  �  �e=b.handleRecord(a[0]);$s=6;case 6:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(!($interfaceIsEqual(f,$ifaceNil))){$s=7;continue;}$s=8;continue;    case 7:  return;    case 8:    $s=1;continue;case 2:    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};S.prototype.serve=function(){return this.$val.serve();};childserve~net/http/fcgi.childnet/http/fcgi.handleRecord~net/http/fcgi.read~net/http/fcgi.record #(*net/http/fcgi.child).handleRecord��S.ptr.prototype.handleRecord=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;      �$r=b.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �c=(d=b.requests[a.h.Id],d!==undefined?[d.v,true]:[AO.nil,false]);e=c[0];f=c[1];  �$r=b.mu.Unlock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}      if(!f&&!((a.h.Type===1))&&!((a.h.Type===9))){  �return $ifaceNil;    }  �g=a.h.Type;if(g===1){$s=3;continue;}if(g===4){$s=4;continue;}if(g===5){$s=5;continue;}if(g===9){$s=6;continue;}if(g===8){$s=7;continue;}if(g===2){$s=8;continue;}$s=9;continue;  �case 3:  �    if(!(e===AO.nil)){  Oreturn A.New("fcgi: received ID that is already in-flight");    }  �  �h=$clone(new Z.ptr(),Z);  �  �i=h.read(a.content());    if(!($interfaceIsEqual(i,$ifaceNil))){  �return i;    }  �if(!((h.role===1))){$s=11;continue;}$s=12;continue;    case 11:  j=b.conn.writeEndRequest(a.h.Id,0,3);$s=13;case 13:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}j;  Kreturn $ifaceNil;    case 12:  \e=P(a.h.Id,h.flags);  �$r=b.mu.Lock();$s=14;case 14:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �k=a.h.Id;(b.requests||$throwRuntimeError("assignment to entry in nil map"))[k]={k:k,v:e};  �$r=b.mu.Unlock();$s=15;case 15:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �return $ifaceNil;    $s=10;continue;  �case 4:  m    if(a.content().$length>0){  �e.rawParams=$appendSlice(e.rawParams,a.content());  �return $ifaceNil;    }  �e.parseParams();  �return $ifaceNil;    $s=10;continue;  �case 5:  
l=a.content();  %if(e.pw===AL.nil){$s=16;continue;}$s=17;continue;    case 16:  ;  ?m=$ifaceNil;  U    if(l.$length>0){  �n=C.Pipe();m=n[0];e.pw=n[1];    }else{  m=V;    }  $go($methodVal(b,"serveRequest"),[e,m]);    case 17:  ?if(l.$length>0){$s=18;continue;}if(!(e.pw===AL.nil)){$s=19;continue;}$s=20;continue;    case 18:  �o=e.pw.Write(l);$s=21;case 21:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;    $s=20;continue;    case 19:  p=e.pw.Close();$s=22;case 22:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}p;    case 20:  %return $ifaceNil;    $s=10;continue;  1case 6:  Gq=(r=new $Map(),s="FCGI_MPXS_CONNS",r[s]={k:s,v:"1"},r);  }t=b.conn.writePairs(10,0,q);$s=23;case 23:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}t;  �return $ifaceNil;    $s=10;continue;  �case 7:  return $ifaceNil;    $s=10;continue;  case 8:  6console.log("abort");  I$r=b.mu.Lock();$s=24;case 24:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  Wdelete b.requests[a.h.Id];  v$r=b.mu.Unlock();$s=25;case 25:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �u=b.conn.writeEndRequest(a.h.Id,0,0);$s=26;case 26:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}u;  �    if(!e.keepConn){  return U;    }  return $ifaceNil;    $s=10;continue;case 9:  2v=$makeSlice(AN,8);  I(0>=v.$length?$throwRuntimeError("index out of range"):v.$array[v.$offset+0]=(a.h.Type<<24>>>24));  cw=b.conn.writeRecord(11,0,v);$s=27;case 27:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}w;  �return $ifaceNil;    case 10:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.$s=$s;$f.$r=$r;return $f;};S.prototype.handleRecord=function(a){return this.$val.handleRecord(a);};childhandleRecord~
errors.Newio.Pipenet/http/fcgi.ALnet/http/fcgi.ANnet/http/fcgi.AOnet/http/fcgi.beginRequestnet/http/fcgi.childnet/http/fcgi.content~net/http/fcgi.emptyBodynet/http/fcgi.errCloseConnnet/http/fcgi.newRequestnet/http/fcgi.parseParams~net/http/fcgi.read~net/http/fcgi.serveRequest~net/http/fcgi.writeEndRequest~net/http/fcgi.writePairs~net/http/fcgi.writeRecord~ #(*net/http/fcgi.child).serveRequest��S.ptr.prototype.serveRequest=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=this;      �d=R(c,a);  �f=G.RequestFromMap(a.params);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];  ,if(!($interfaceIsEqual(h,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  j$r=d.WriteHeader(500);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �i=a.reqId;j=h.Error();$s=6;case 6:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=new AN($stringToBytes(j));l=c.conn.writeRecord(7,i,k);$s=7;case 7:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}l;    $s=4;continue;case 3:  �g.Body=b;  �$r=c.handler.ServeHTTP(d,g);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 4:  m=d.Close();$s=9;case 9:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}m;  *$r=c.mu.Lock();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  7delete c.requests[a.reqId];  V$r=c.mu.Unlock();$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  en=c.conn.writeEndRequest(a.reqId,0,0);$s=12;case 12:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}n;  *o=C.CopyN(D.Discard,b,new $Int64(0,104857600));$s=13;case 13:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;  Sp=b.Close();$s=14;case 14:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}p;  bif(!a.keepConn){$s=15;continue;}$s=16;continue;    case 15:  wq=c.conn.Close();$s=17;case 17:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}q;    case 16:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};S.prototype.serveRequest=function(a,b){return this.$val.serveRequest(a,b);};childserveRequest~io.CopyNio/ioutil.Discardnet/http/cgi.RequestFromMapnet/http/fcgi.ANnet/http/fcgi.childnet/http/fcgi.newResponsenet/http/fcgi.writeEndRequest~net/http/fcgi.writeRecord~ net/http/fcgi.ServeW��W=$pkg.Serve=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);      �if($interfaceIsEqual(a,$ifaceNil)){$s=1;continue;}$s=2;continue;    case 1:  �  �c=$ifaceNil;  e=E.FileListener(H.Stdin);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;a=d[0];c=d[1];  )    if(!($interfaceIsEqual(c,$ifaceNil))){  <return c;    }  M$deferred.push([$methodVal(a,"Close"),[]]);    case 2:  a    if($interfaceIsEqual(b,$ifaceNil)){  wb=F.DefaultServeMux;    }  �case 4:  �g=a.Accept();$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];  �    if(!($interfaceIsEqual(i,$ifaceNil))){  �return i;    }  �j=T(h,b);  �$go($methodVal(j,"serve"),[]);    $s=4;continue;case 5:    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};Servenet.FileListenernet/http.DefaultServeMuxnet/http/fcgi.Servenet/http/fcgi.newChildnet/http/fcgi.serve~os.Stdin "(*net/http/fcgi.beginRequest).read�pZ.ptr.prototype.read=function(a){var $ptr,a,b;  "wb=this;      "�    if(!((a.$length===8))){  "�return A.New("fcgi: invalid begin request record");    }  "�b.role=N.BigEndian.Uint16(a);  #(b.flags=(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]);  #?return $ifaceNil;    };Z.prototype.read=function(a){return this.$val.read(a);};beginRequestread~encoding/binary.BigEndian
errors.Newnet/http/fcgi.beginRequest (*net/http/fcgi.header).init�Y.ptr.prototype.init=function(a,b,c){var $ptr,a,b,c,d;  #�d=this;      $'d.Version=1;  $6d.Type=a;  $Hd.Id=b;  $Vd.ContentLength=(c<<16>>>16);  $d.PaddingLength=((-c&7)<<24>>>24);    };Y.prototype.init=function(a,b,c){return this.$val.init(a,b,c);};headerinit~net/http/fcgi.header net/http/fcgi.newConnACqAC=function(a){var $ptr,a;      %ureturn new AB.ptr(new J.Mutex.ptr(),a,new M.Buffer.ptr(),new Y.ptr());    };newConnbytes.Buffernet/http/fcgi.connnet/http/fcgi.headernet/http/fcgi.newConn
sync.Mutex (*net/http/fcgi.conn).Close��AB.ptr.prototype.Close=function $b(){var $ptr,a,b,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  %�a=this;      %�$r=a.mutex.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  %�$deferred.push([$methodVal(a.mutex,"Unlock"),[]]);  %�b=a.rwc.Close();$s=2;case 2:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AB.prototype.Close=function(){return this.$val.Close();};connnet/http/fcgi.conn (*net/http/fcgi.record).read��AD.ptr.prototype.read=function $b(a){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=$ifaceNil;  &6c=this;      &d  &ge=N.Read(a,(d=N.BigEndian,new d.constructor.elem(d)),c.h);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}b=e;if(!($interfaceIsEqual(b,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  &�    b=b;return b;    case 3:  &�    if(!((c.h.Version===1))){  &�    b=A.New("fcgi: invalid header version");return b;    }  'f=(c.h.ContentLength>>0)+(c.h.PaddingLength>>0)>>0;  '?  'Bh=C.ReadFull(a,$subslice(new AN(c.buf),0,f));$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;b=g[1];if(!($interfaceIsEqual(b,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  'w    b=b;return b;    case 6:  '�    b=$ifaceNil;return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};AD.prototype.read=function(a){return this.$val.read(a);};recordread~encoding/binary.BigEndianencoding/binary.Read
errors.Newio.ReadFullnet/http/fcgi.ANnet/http/fcgi.record (*net/http/fcgi.record).content��AD.ptr.prototype.content=function(){var $ptr,a;  '�a=this;      '�return $subslice(new AN(a.buf),0,a.h.ContentLength);    };AD.prototype.content=function(){return this.$val.content();};recordcontent~net/http/fcgi.ANnet/http/fcgi.record !(*net/http/fcgi.conn).writeRecord�AB.ptr.prototype.writeRecord=function $b(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  (d=this;      ([$r=d.mutex.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  (k$deferred.push([$methodVal(d.mutex,"Unlock"),[]]);  (�d.buf.Reset();  (�d.h.init(a,b,c.$length);  (�  (�g=N.Write(d.buf,(e=N.BigEndian,new e.constructor.elem(e)),(f=d.h,new f.constructor.elem(f)));$s=2;case 2:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=g;if(!($interfaceIsEqual(h,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  (�return h;    case 4:  )	  )i=d.buf.Write(c);j=i[1];    if(!($interfaceIsEqual(j,$ifaceNil))){  )5return j;    }  )D  )Gk=d.buf.Write($subslice(new AN(AA),0,d.h.PaddingLength));l=k[1];    if(!($interfaceIsEqual(l,$ifaceNil))){  )�return l;    }  )�n=d.rwc.Write(d.buf.Bytes());$s=5;case 5:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;o=m[1];  )�return o;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AB.prototype.writeRecord=function(a,b,c){return this.$val.writeRecord(a,b,c);};connwriteRecord~encoding/binary.BigEndianencoding/binary.Writenet/http/fcgi.ANnet/http/fcgi.connnet/http/fcgi.init~net/http/fcgi.pad '(*net/http/fcgi.conn).writeBeginRequest��AB.ptr.prototype.writeBeginRequest=function $b(a,b,c){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  )�d=this;      *e=$toNativeArray($kindUint8,[((b>>>8<<16>>>16)<<24>>>24),(b<<24>>>24),c,0,0,0,0,0]);  *Mf=d.writeRecord(1,a,new AN(e));$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}return f;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};AB.prototype.writeBeginRequest=function(a,b,c){return this.$val.writeBeginRequest(a,b,c);};connwriteBeginRequest~net/http/fcgi.ANnet/http/fcgi.connnet/http/fcgi.writeRecord~ %(*net/http/fcgi.conn).writeEndRequest�AB.ptr.prototype.writeEndRequest=function $b(a,b,c){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  *�d=this;      *�e=$makeSlice(AN,8);  *�N.BigEndian.PutUint32(e,(b>>>0));  +'(4>=e.$length?$throwRuntimeError("index out of range"):e.$array[e.$offset+4]=c);  +>f=d.writeRecord(3,a,e);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}return f;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};AB.prototype.writeEndRequest=function(a,b,c){return this.$val.writeEndRequest(a,b,c);};connwriteEndRequest~encoding/binary.BigEndiannet/http/fcgi.ANnet/http/fcgi.connnet/http/fcgi.writeRecord~  (*net/http/fcgi.conn).writePairs�\AB.ptr.prototype.writePairs=function $b(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  +vd=this;      +�e=AI(d,a,b);  +�f=$makeSlice(AN,8);  ,g=c;h=0;i=$keys(g);case 1:if(!(h<i.length)){$s=2;continue;}j=g[i[h]];        if(j===undefined){    h++;$s=1;continue;    }k=j.k;l=j.v;  , m=AG(f,(k.length>>>0));  ,E  ,Em=m+(AG($subslice(f,m),(l.length>>>0)))>>0;      ,n  ,qo=e.Writer.Write($subslice(f,0,m));$s=3;case 3:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;p=n[1];if(!($interfaceIsEqual(p,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  ,�return p;    case 5:  ,�  ,�r=e.Writer.WriteString(k);$s=6;case 6:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;s=q[1];if(!($interfaceIsEqual(s,$ifaceNil))){$s=7;continue;}$s=8;continue;    case 7:  ,�return s;    case 8:  ,�  ,�u=e.Writer.WriteString(l);$s=9;case 9:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}t=u;v=t[1];if(!($interfaceIsEqual(v,$ifaceNil))){$s=10;continue;}$s=11;continue;    case 10:  -return v;    case 11:    h++;$s=1;continue;case 2:  -.w=e.Close();$s=12;case 12:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}w;  -9return $ifaceNil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.$s=$s;$f.$r=$r;return $f;};AB.prototype.writePairs=function(a,b,c){return this.$val.writePairs(a,b,c);};connwritePairs~net/http/fcgi.ANnet/http/fcgi.connnet/http/fcgi.encodeSizenet/http/fcgi.newWriter net/http/fcgi.readSizeAE�|AE=function(a){var $ptr,a,b,c,d,e;      -p    if(a.$length===0){  -�return[0,0];    }  -�b=((0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>>0);c=1;d=b;e=c;  -�    if(!((((d&128)>>>0)===0))){  -�    if(a.$length<4){  -�return[0,0];    }  -�e=4;  -�d=N.BigEndian.Uint32(a);  .  .d=d&~(2147483648);        }  .-return[d,e];    };readSizeencoding/binary.BigEndiannet/http/fcgi.readSize net/http/fcgi.readStringAF��AF=function(a,b){var $ptr,a,b;      .p    if(b>(a.$length>>>0)){  .�return"";    }  .�return $bytesToString($subslice(a,0,b));    };
readStringnet/http/fcgi.readString net/http/fcgi.encodeSizeAG�AG=function(a,b){var $ptr,a,b;      .�    if(b>127){  .�  .�b=(b|(2147483648))>>>0;      /N.BigEndian.PutUint32(a,b);  /.return 4;    }  /;(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b<<24>>>24));  /Nreturn 1;    };
encodeSizeencoding/binary.BigEndiannet/http/fcgi.encodeSize  (*net/http/fcgi.bufWriter).Close�lAH.ptr.prototype.Close=function $b(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  /�a=this;      0  0b=a.Writer.Flush();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  0Cd=a.closer.Close();$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  0Vreturn c;    case 3:  0ee=a.closer.Close();$s=5;case 5:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}return e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};AH.prototype.Close=function(){return this.$val.Close();};	bufWriternet/http/fcgi.bufWriter net/http/fcgi.newWriterAI��AI=function(a,b,c){var $ptr,a,b,c,d,e;      0�d=new AJ.ptr(a,b,c);  0�e=L.NewWriterSize(d,65535);  1&return new AH.ptr(d,e);    };	newWriterbufio.NewWriterSizenet/http/fcgi.ARnet/http/fcgi.bufWriternet/http/fcgi.newWriternet/http/fcgi.streamWriter #(*net/http/fcgi.streamWriter).Write��AJ.ptr.prototype.Write=function $b(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  2b=this;      2Bc=0;  2Kcase 1:if(!(a.$length>0)){$s=2;continue;}  2^d=a.$length;  2l    if(d>65535){  2�d=65535;    }  2�  2�e=b.c.writeRecord(b.recType,b.reqId,$subslice(a,0,d));$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(!($interfaceIsEqual(f,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  2�return[c,f];    case 5:  2�  2�c=c+(d)>>0;      2�a=$subslice(a,d);    $s=1;continue;case 2:  3return[c,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};AJ.prototype.Write=function(a){return this.$val.Write(a);};streamWriternet/http/fcgi.streamWriternet/http/fcgi.writeRecord~ #(*net/http/fcgi.streamWriter).Close�AJ.ptr.prototype.Close=function $b(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  3a=this;      3kb=a.c.writeRecord(a.recType,a.reqId,AN.nil);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};AJ.prototype.Close=function(){return this.$val.Close();};streamWriternet/http/fcgi.ANnet/http/fcgi.streamWriternet/http/fcgi.writeRecord~ ��{"Base":13214,"Files":[{"Name":"/usr/local/go/src/net/http/fcgi/child.go","Base":1,"Size":7180,"Lines":[0,55,109,159,160,173,174,247,248,257,267,274,280,293,300,312,328,334,345,353,361,363,364,445,483,505,531,549,578,600,618,634,636,637,691,707,726,759,796,799,824,834,836,837,889,923,944,963,984,1014,1028,1038,1042,1060,1090,1104,1114,1118,1136,1170,1193,1227,1250,1272,1275,1277,1278,1322,1345,1367,1392,1416,1434,1436,1437,1490,1509,1524,1549,1601,1604,1606,1607,1649,1666,1668,1669,1722,1743,1774,1777,1801,1803,1804,1847,1867,1876,1879,1901,1938,1963,1994,2027,2063,2111,2170,2173,2174,2207,2272,2275,2276,2344,2365,2390,2392,2393,2422,2443,2474,2477,2490,2492,2493,2528,2539,2559,2561,2562,2582,2597,2619,2620,2672,2725,2727,2728,2797,2813,2839,2860,2899,2902,2904,2905,2931,2953,2969,2976,3023,3033,3037,3084,3094,3098,3101,3103,3104,3171,3172,3228,3229,3279,3292,3325,3340,3415,3465,3478,3481,3482,3503,3527,3545,3608,3659,3727,3731,3732,3754,3803,3817,3821,3853,3911,3925,3929,3968,3982,4011,4027,4040,4058,4129,4202,4232,4291,4305,4309,4329,4342,4359,4386,4407,4433,4458,4522,4565,4594,4606,4627,4632,4664,4668,4692,4760,4823,4848,4876,4894,4898,4911,4932,4986,5038,5051,5067,5134,5147,5171,5190,5204,5235,5251,5312,5333,5373,5396,5400,5413,5423,5446,5472,5516,5529,5532,5534,5535,5600,5626,5674,5691,5735,5783,5848,5858,5880,5914,5917,5928,5941,5972,5987,6048,6049,6113,6174,6229,6287,6343,6401,6440,6481,6495,6496,6516,6533,6536,6538,6539,6619,6694,6715,6772,6824,6881,6896,6912,6950,6968,6982,6986,7004,7007,7028,7061,7064,7071,7095,7113,7127,7131,7160,7175,7178],"Infos":null},{"Name":"/usr/local/go/src/net/http/fcgi/fcgi.go","Base":7182,"Size":6031,"Lines":[0,55,109,159,160,209,260,337,350,351,430,443,444,453,462,471,490,500,506,514,516,517,560,615,634,635,643,676,709,742,775,808,841,874,907,940,974,1008,1010,1011,1086,1109,1110,1118,1159,1175,1177,1178,1186,1248,1264,1276,1278,1279,1287,1317,1338,1356,1375,1377,1378,1398,1399,1420,1441,1464,1486,1508,1529,1550,1552,1553,1580,1597,1613,1632,1634,1635,1688,1712,1770,1773,1817,1840,1852,1854,1855,1912,1976,1997,1998,2072,2087,2105,2119,2160,2205,2207,2208,2239,2258,2276,2302,2303,2328,2346,2358,2360,2361,2406,2430,2432,2433,2464,2480,2504,2526,2528,2529,2550,2562,2591,2593,2594,2645,2710,2723,2726,2751,2803,2806,2864,2919,2932,2935,2947,2949,2950,2986,3020,3022,3023,3072,3148,3164,3188,3203,3237,3306,3319,3322,3365,3378,3381,3446,3459,3462,3500,3512,3514,3515,3596,3646,3699,3701,3702,3792,3814,3864,3887,3935,3937,3938,4028,4063,4085,4112,4149,4190,4234,4248,4252,4298,4312,4316,4362,4376,4380,4383,4394,4406,4408,4409,4449,4467,4481,4484,4512,4535,4553,4568,4572,4580,4616,4635,4638,4654,4656,4657,4705,4733,4745,4748,4773,4775,4776,4821,4838,4856,4894,4905,4908,4927,4937,4939,4940,5022,5033,5057,5075,5090,5092,5093,5129,5171,5190,5203,5206,5231,5233,5234,5302,5360,5399,5424,5426,5427,5507,5551,5578,5593,5610,5626,5628,5629,5683,5692,5710,5724,5744,5760,5764,5833,5851,5855,5865,5877,5880,5896,5898,5899,5938,5980,6029],"Infos":null}]}
 