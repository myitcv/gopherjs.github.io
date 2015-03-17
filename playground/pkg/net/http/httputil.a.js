p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����net/http/httputilhttputilbufiobyteserrorsfmtio	io/ioutillognetnet/httpnet/http/internalnet/textprotonet/urlstringssynctime��7package httputil
import bufio "bufio"
import bytes "bytes"
import errors "errors"
import fmt "fmt"
import io "io"
import ioutil "io/ioutil"
import net "net"
import http "net/http"
import url "net/url"
import strings "strings"
import time "time"
import internal "net/http/internal"
import textproto "net/textproto"
import sync "sync"
import log "log"
type @"".ClientConn struct { @"".lk @"sync".Mutex; @"".c @"net".Conn; @"".r *@"bufio".Reader; @"".re error; @"".we error; @"".lastbody @"io".ReadCloser; @"".nread int; @"".nwritten int; @"".pipereq map[*@"net/http".Request]uint; @"".pipe @"net/textproto".Pipeline; @"".writeReq func (? *@"net/http".Request, ? @"io".Writer) (? error) }
func (? *@"".ClientConn) @"".Close() (? error)
func (? *@"".ClientConn) @"".Do(@"".req *@"net/http".Request) (@"".resp *@"net/http".Response, @"".err error)
func (? *@"".ClientConn) @"".Hijack() (@"".c @"net".Conn, @"".r *@"bufio".Reader)
func (? *@"".ClientConn) @"".Pending() (? int)
func (? *@"".ClientConn) @"".Read(@"".req *@"net/http".Request) (@"".resp *@"net/http".Response, @"".err error)
func (? *@"".ClientConn) @"".Write(@"".req *@"net/http".Request) (@"".err error)
func @"".DumpRequest(@"".req *@"net/http".Request, @"".body bool) (@"".dump []byte, @"".err error)
func @"".DumpRequestOut(@"".req *@"net/http".Request, @"".body bool) (? []byte, ? error)
func @"".DumpResponse(@"".resp *@"net/http".Response, @"".body bool) (@"".dump []byte, @"".err error)
var @"".ErrClosed *@"net/http".ProtocolError
var @"".ErrLineTooLong error
var @"".ErrPersistEOF *@"net/http".ProtocolError
var @"".ErrPipeline *@"net/http".ProtocolError
func @"".NewChunkedReader(@"".r @"io".Reader) (? @"io".Reader)
func @"".NewChunkedWriter(@"".w @"io".Writer) (? @"io".WriteCloser)
func @"".NewClientConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ClientConn)
func @"".NewProxyClientConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ClientConn)
func @"".NewServerConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ServerConn)
func @"".NewSingleHostReverseProxy(@"".target *@"net/url".URL) (? *@"".ReverseProxy)
type @"".ReverseProxy struct { @"".Director func (? *@"net/http".Request) (); @"".Transport @"net/http".RoundTripper; @"".FlushInterval @"time".Duration; @"".ErrorLog *@"log".Logger }
func (? *@"".ReverseProxy) @"".ServeHTTP(@"".rw @"net/http".ResponseWriter, @"".req *@"net/http".Request) ()
func (? *@"".ReverseProxy) @"".copyResponse(@"".dst @"io".Writer, @"".src @"io".Reader) ()
func (? *@"".ReverseProxy) @"".logf(@"".format string, @"".args ...interface {  }) ()
type @"".ServerConn struct { @"".lk @"sync".Mutex; @"".c @"net".Conn; @"".r *@"bufio".Reader; @"".re error; @"".we error; @"".lastbody @"io".ReadCloser; @"".nread int; @"".nwritten int; @"".pipereq map[*@"net/http".Request]uint; @"".pipe @"net/textproto".Pipeline }
func (? *@"".ServerConn) @"".Close() (? error)
func (? *@"".ServerConn) @"".Hijack() (@"".c @"net".Conn, @"".r *@"bufio".Reader)
func (? *@"".ServerConn) @"".Pending() (? int)
func (? *@"".ServerConn) @"".Read() (@"".req *@"net/http".Request, @"".err error)
func (? *@"".ServerConn) @"".Write(@"".req *@"net/http".Request, @"".resp *@"net/http".Response) (? error)
type @"".delegateReader struct { @"".c chan @"io".Reader; @"".r @"io".Reader }
func (? *@"".delegateReader) @"".Read(@"".p []byte) (? int, ? error)
type @"".dumpConn struct { ? @"io".Writer; ? @"io".Reader }
func (? *@"".dumpConn) @"".Close() (? error)
func (? *@"".dumpConn) @"".LocalAddr() (? @"net".Addr)
func (? *@"".dumpConn) @"".RemoteAddr() (? @"net".Addr)
func (? *@"".dumpConn) @"".SetDeadline(@"".t @"time".Time) (? error)
func (? *@"".dumpConn) @"".SetReadDeadline(@"".t @"time".Time) (? error)
func (? *@"".dumpConn) @"".SetWriteDeadline(@"".t @"time".Time) (? error)
type @"".failureToReadBody struct {  }
func (? @"".failureToReadBody) @"".Close() (? error)
func (? @"".failureToReadBody) @"".Read(? []byte) (? int, ? error)
func (? *@"".failureToReadBody) @"".Close() (? error)
func (? *@"".failureToReadBody) @"".Read(? []byte) (? int, ? error)
type @"".maxLatencyWriter struct { @"".dst @"".writeFlusher; @"".latency @"time".Duration; @"".lk @"sync".Mutex; @"".done chan bool }
func (? *@"".maxLatencyWriter) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".maxLatencyWriter) @"".flushLoop() ()
func (? *@"".maxLatencyWriter) @"".stop() ()
type @"".neverEnding byte
func (? @"".neverEnding) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".neverEnding) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".writeFlusher interface { @"net/http".Flush() (); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
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
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
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
type @"net/textproto".Pipeline struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".request @"net/textproto".sequencer; @"net/textproto".response @"net/textproto".sequencer }
func (? *@"net/textproto".Pipeline) @"net/textproto".EndRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".EndResponse(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".Next() (? uint)
func (? *@"net/textproto".Pipeline) @"net/textproto".StartRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".StartResponse(@"net/textproto".id uint) ()
type @"io".Writer interface { @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"net/http".Response struct { @"net/http".Status string; @"net/http".StatusCode int; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Trailer @"net/http".Header; @"net/http".Request *@"net/http".Request; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Response) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Response) @"net/http".Location() (? *@"net/url".URL, ? error)
func (? *@"net/http".Response) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Response) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
type @"net/http".ProtocolError struct { @"net/http".ErrorString string }
func (? *@"net/http".ProtocolError) @"net/http".Error() (? string)
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/http".RoundTripper interface { @"net/http".RoundTrip(? *@"net/http".Request) (? *@"net/http".Response, ? error) }
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
import nosync "github.com/gopherjs/gopherjs/nosync"
type @"log".Logger struct { @"log".mu @"github.com/gopherjs/gopherjs/nosync".Mutex; @"log".prefix string; @"log".flag int; @"log".out @"io".Writer; @"log".buf []byte }
func (? *@"log".Logger) @"log".Fatal(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalf(@"".format string, @"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalln(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Flags() (? int)
func (? *@"log".Logger) @"log".Output(@"".calldepth int, @"".s string) (? error)
func (? *@"log".Logger) @"log".Panic(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicf(@"".format string, @"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicln(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Prefix() (? string)
func (? *@"log".Logger) @"log".Print(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Printf(@"".format string, @"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Println(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".SetFlags(@"".flag int) ()
func (? *@"log".Logger) @"log".SetPrefix(@"".prefix string) ()
func (? *@"log".Logger) @"log".formatHeader(@"".buf *[]byte, @"".t @"time".Time, @"".file string, @"".line int) ()
type @"net/http".ResponseWriter interface { @"net/http".Header() (? @"net/http".Header); @"net/http".Write(? []byte) (? int, ? error); @"net/http".WriteHeader(? int) () }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
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
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
type @"net/textproto".sequencer struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".wait map[uint]chan uint }
func (? *@"net/textproto".sequencer) @"net/textproto".End(@"net/textproto".id uint) ()
func (? *@"net/textproto".sequencer) @"net/textproto".Start(@"net/textproto".id uint) ()
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
type @"github.com/gopherjs/gopherjs/nosync".Mutex struct { @"github.com/gopherjs/gopherjs/nosync".locked bool }
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"".sec int64) (@"".name string, @"".offset int, @"".isDST bool, @"".start int64, @"".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"".name string, @"".unix int64) (@"".offset int, @"".isDST bool, @"".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"net/http".keyValues struct { @"net/http".key string; @"net/http".values []string }
type @"net/http".headerSorter struct { @"net/http".kvs []@"net/http".keyValues }
func (? *@"net/http".headerSorter) @"net/http".Len() (? int)
func (? *@"net/http".headerSorter) @"net/http".Less(@"net/http".i int, @"net/http".j int) (? bool)
func (? *@"net/http".headerSorter) @"net/http".Swap(@"net/http".i int, @"net/http".j int) ()
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
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
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
type @"bytes".readOp int
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
iAA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["io/ioutil"];a    $r=F.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} OO=$packages["log"];a    $r=O.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["net"];a    $r=G.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["net/http"];a    $r=H.$init();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} L!L=$packages["net/http/internal"];c    $r=L.$init();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} MM=$packages["net/textproto"];c    $r=M.$init();$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} II=$packages["net/url"];c    $r=I.$init();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} JJ=$packages["strings"];c    $r=J.$init();$s=13;case 13:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} NN=$packages["sync"];c    $r=N.$init();$s=14;case 14:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} KK=$packages["time"];c    $r=K.$init();$s=15;case 15:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} Q��Q=$pkg.dumpConn=$newType(0,$kindStruct,"httputil.dumpConn","dumpConn","net/http/httputil",function(Writer_,Reader_){this.$val=this;if(arguments.length===0){this.Writer=$ifaceNil;this.Reader=$ifaceNil;return;}this.Writer=Writer_;this.Reader=Reader_;});��BE.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"LocalAddr",name:"LocalAddr",pkg:"",typ:$funcType([],[G.Addr],false)},{prop:"RemoteAddr",name:"RemoteAddr",pkg:"",typ:$funcType([],[G.Addr],false)},{prop:"SetDeadline",name:"SetDeadline",pkg:"",typ:$funcType([K.Time],[$error],false)},{prop:"SetReadDeadline",name:"SetReadDeadline",pkg:"",typ:$funcType([K.Time],[$error],false)},{prop:"SetWriteDeadline",name:"SetWriteDeadline",pkg:"",typ:$funcType([K.Time],[$error],false)}];pQ.init([{prop:"Writer",name:"",pkg:"",typ:E.Writer,tag:""},{prop:"Reader",name:"",pkg:"",typ:E.Reader,tag:""}]);dumpConn	io.Reader	io.Writernet.Addrnet/http/httputil.BEnet/http/httputil.dumpConn	time.Time RhR=$pkg.neverEnding=$newType(1,$kindUint8,"httputil.neverEnding","neverEnding","net/http/httputil",null);UR.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([AT],[$Int,$error],false)}];neverEndingnet/http/httputil.ATnet/http/httputil.neverEnding T��T=$pkg.delegateReader=$newType(0,$kindStruct,"httputil.delegateReader","delegateReader","net/http/httputil",function(c_,r_){this.$val=this;if(arguments.length===0){this.c=AU.nil;this.r=$ifaceNil;return;}this.c=c_;this.r=r_;});VBF.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([AT],[$Int,$error],false)}];��T.init([{prop:"c",name:"c",pkg:"net/http/httputil",typ:AU,tag:""},{prop:"r",name:"r",pkg:"net/http/httputil",typ:E.Reader,tag:""}]);delegateReader	io.Readernet/http/httputil.ATnet/http/httputil.AUnet/http/httputil.BF net/http/httputil.delegateReader Z��Z=$pkg.failureToReadBody=$newType(0,$kindStruct,"httputil.failureToReadBody","failureToReadBody","net/http/httputil",function(){this.$val=this;if(arguments.length===0){return;}});��Z.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([AT],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];Z.init([]);failureToReadBodynet/http/httputil.AT#net/http/httputil.failureToReadBody AF�>AF=$pkg.ServerConn=$newType(0,$kindStruct,"httputil.ServerConn","ServerConn","net/http/httputil",function(lk_,c_,r_,re_,we_,lastbody_,nread_,nwritten_,pipereq_,pipe_){this.$val=this;if(arguments.length===0){this.lk=new N.Mutex.ptr();this.c=$ifaceNil;this.r=AZ.nil;this.re=$ifaceNil;this.we=$ifaceNil;this.lastbody=$ifaceNil;this.nread=0;this.nwritten=0;this.pipereq=false;this.pipe=new M.Pipeline.ptr();return;}this.lk=lk_;this.c=c_;this.r=r_;this.re=re_;this.we=we_;this.lastbody=lastbody_;this.nread=nread_;this.nwritten=nwritten_;this.pipereq=pipereq_;this.pipe=pipe_;});�nBG.methods=[{prop:"Hijack",name:"Hijack",pkg:"",typ:$funcType([],[G.Conn,AZ],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([],[BA,$error],false)},{prop:"Pending",name:"Pending",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([BA,BB],[$error],false)}];��AF.init([{prop:"lk",name:"lk",pkg:"net/http/httputil",typ:N.Mutex,tag:""},{prop:"c",name:"c",pkg:"net/http/httputil",typ:G.Conn,tag:""},{prop:"r",name:"r",pkg:"net/http/httputil",typ:AZ,tag:""},{prop:"re",name:"re",pkg:"net/http/httputil",typ:$error,tag:""},{prop:"we",name:"we",pkg:"net/http/httputil",typ:$error,tag:""},{prop:"lastbody",name:"lastbody",pkg:"net/http/httputil",typ:E.ReadCloser,tag:""},{prop:"nread",name:"nread",pkg:"net/http/httputil",typ:$Int,tag:""},{prop:"nwritten",name:"nwritten",pkg:"net/http/httputil",typ:$Int,tag:""},{prop:"pipereq",name:"pipereq",pkg:"net/http/httputil",typ:BH,tag:""},{prop:"pipe",name:"pipe",pkg:"net/http/httputil",typ:M.Pipeline,tag:""}]);
ServerConn
io.ReadClosernet.Connnet/http/httputil.AZnet/http/httputil.BAnet/http/httputil.BBnet/http/httputil.BGnet/http/httputil.BHnet/http/httputil.ServerConnnet/textproto.Pipeline
sync.Mutex AH��AH=$pkg.ClientConn=$newType(0,$kindStruct,"httputil.ClientConn","ClientConn","net/http/httputil",function(lk_,c_,r_,re_,we_,lastbody_,nread_,nwritten_,pipereq_,pipe_,writeReq_){this.$val=this;if(arguments.length===0){this.lk=new N.Mutex.ptr();this.c=$ifaceNil;this.r=AZ.nil;this.re=$ifaceNil;this.we=$ifaceNil;this.lastbody=$ifaceNil;this.nread=0;this.nwritten=0;this.pipereq=false;this.pipe=new M.Pipeline.ptr();this.writeReq=$throwNilPointerError;return;}this.lk=lk_;this.c=c_;this.r=r_;this.re=re_;this.we=we_;this.lastbody=lastbody_;this.nread=nread_;this.nwritten=nwritten_;this.pipereq=pipereq_;this.pipe=pipe_;this.writeReq=writeReq_;});��BI.methods=[{prop:"Hijack",name:"Hijack",pkg:"",typ:$funcType([],[G.Conn,AZ],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([BA],[$error],false)},{prop:"Pending",name:"Pending",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([BA],[BB,$error],false)},{prop:"Do",name:"Do",pkg:"",typ:$funcType([BA],[BB,$error],false)}];��AH.init([{prop:"lk",name:"lk",pkg:"net/http/httputil",typ:N.Mutex,tag:""},{prop:"c",name:"c",pkg:"net/http/httputil",typ:G.Conn,tag:""},{prop:"r",name:"r",pkg:"net/http/httputil",typ:AZ,tag:""},{prop:"re",name:"re",pkg:"net/http/httputil",typ:$error,tag:""},{prop:"we",name:"we",pkg:"net/http/httputil",typ:$error,tag:""},{prop:"lastbody",name:"lastbody",pkg:"net/http/httputil",typ:E.ReadCloser,tag:""},{prop:"nread",name:"nread",pkg:"net/http/httputil",typ:$Int,tag:""},{prop:"nwritten",name:"nwritten",pkg:"net/http/httputil",typ:$Int,tag:""},{prop:"pipereq",name:"pipereq",pkg:"net/http/httputil",typ:BH,tag:""},{prop:"pipe",name:"pipe",pkg:"net/http/httputil",typ:M.Pipeline,tag:""},{prop:"writeReq",name:"writeReq",pkg:"net/http/httputil",typ:BJ,tag:""}]);
ClientConnio.ReadCloser	io.Writernet.Connnet/http/httputil.AZnet/http/httputil.BAnet/http/httputil.BBnet/http/httputil.BHnet/http/httputil.BInet/http/httputil.BJnet/http/httputil.ClientConnnet/textproto.Pipeline
sync.Mutex AL��AL=$pkg.ReverseProxy=$newType(0,$kindStruct,"httputil.ReverseProxy","ReverseProxy","net/http/httputil",function(Director_,Transport_,FlushInterval_,ErrorLog_){this.$val=this;if(arguments.length===0){this.Director=$throwNilPointerError;this.Transport=$ifaceNil;this.FlushInterval=new K.Duration(0,0);this.ErrorLog=BC.nil;return;}this.Director=Director_;this.Transport=Transport_;this.FlushInterval=FlushInterval_;this.ErrorLog=ErrorLog_;});�*BK.methods=[{prop:"ServeHTTP",name:"ServeHTTP",pkg:"",typ:$funcType([H.ResponseWriter,BA],[],false)},{prop:"copyResponse",name:"copyResponse",pkg:"net/http/httputil",typ:$funcType([E.Writer,E.Reader],[],false)},{prop:"logf",name:"logf",pkg:"net/http/httputil",typ:$funcType([$String,AX],[],true)}];�AL.init([{prop:"Director",name:"Director",pkg:"",typ:BL,tag:""},{prop:"Transport",name:"Transport",pkg:"",typ:H.RoundTripper,tag:""},{prop:"FlushInterval",name:"FlushInterval",pkg:"",typ:K.Duration,tag:""},{prop:"ErrorLog",name:"ErrorLog",pkg:"",typ:BC,tag:""}]);ReverseProxy	io.Reader	io.Writernet/http.ResponseWriternet/http.RoundTrippernet/http/httputil.AXnet/http/httputil.BAnet/http/httputil.BCnet/http/httputil.BKnet/http/httputil.BLnet/http/httputil.ReverseProxytime.Duration AQpAQ=$pkg.writeFlusher=$newType(8,$kindInterface,"httputil.writeFlusher","writeFlusher","net/http/httputil",null);��AQ.init([{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AT],[$Int,$error],false)}]);writeFlushernet/http/httputil.ATnet/http/httputil.writeFlusher AR�gAR=$pkg.maxLatencyWriter=$newType(0,$kindStruct,"httputil.maxLatencyWriter","maxLatencyWriter","net/http/httputil",function(dst_,latency_,lk_,done_){this.$val=this;if(arguments.length===0){this.dst=$ifaceNil;this.latency=new K.Duration(0,0);this.lk=new N.Mutex.ptr();this.done=BD.nil;return;}this.dst=dst_;this.latency=latency_;this.lk=lk_;this.done=done_;});��BM.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([AT],[$Int,$error],false)},{prop:"flushLoop",name:"flushLoop",pkg:"net/http/httputil",typ:$funcType([],[],false)},{prop:"stop",name:"stop",pkg:"net/http/httputil",typ:$funcType([],[],false)}];�AR.init([{prop:"dst",name:"dst",pkg:"net/http/httputil",typ:AQ,tag:""},{prop:"latency",name:"latency",pkg:"net/http/httputil",typ:K.Duration,tag:""},{prop:"lk",name:"lk",pkg:"net/http/httputil",typ:N.Mutex,tag:""},{prop:"done",name:"done",pkg:"net/http/httputil",typ:BD,tag:""}]);maxLatencyWriternet/http/httputil.ATnet/http/httputil.BDnet/http/httputil.BM"net/http/httputil.maxLatencyWriternet/http/httputil.writeFlusher
sync.Mutextime.Duration ASAS=$sliceType($String);AS ATAT=$sliceType($Uint8);AT AU#AU=$chanType(E.Reader,false,false);AU	io.Reader AV,AV=$ptrType($packages["crypto/tls"].Config);AVcrypto/tls.Config AWAW=$sliceType(E.Writer);AW	io.Writer AXAX=$sliceType($emptyInterface);AX AYAY=$ptrType(I.URL);AYnet/url.URL AZAZ=$ptrType(A.Reader);AZbufio.Reader BABA=$ptrType(H.Request);BAnet/http.Request BBBB=$ptrType(H.Response);BBnet/http.Response BCBC=$ptrType(O.Logger);BC
log.Logger BD BD=$chanType($Bool,false,false);BD BEBE=$ptrType(Q);BEnet/http/httputil.dumpConn BFBF=$ptrType(T);BF net/http/httputil.delegateReader BGBG=$ptrType(AF);BGnet/http/httputil.ServerConn BHBH=$mapType(BA,$Uint);BHnet/http/httputil.BA BIBI=$ptrType(AH);BInet/http/httputil.ClientConn BJ+BJ=$funcType([BA,E.Writer],[$error],false);BJ	io.Writernet/http/httputil.BA BKBK=$ptrType(AL);BKnet/http/httputil.ReverseProxy BLBL=$funcType([BA],[],false);BLnet/http/httputil.BA BMBM=$ptrType(AR);BM"net/http/httputil.maxLatencyWriter VreqWriteExcludeHeaderDump Y	errNoBody AA	emptyBody ErrLineTooLong ErrPersistEOF 	ErrClosed ErrPipeline AE	errClosed AKAK=$throwNilPointerError;onExitFlushLoop!net/http/httputil.onExitFlushLoop AP
hopHeaders ab��    V=(a=new $Map(),b="Host",a[b]={k:b,v:true},b="Content-Length",a[b]={k:b,v:true},b="Transfer-Encoding",a[b]={k:b,v:true},b="Trailer",a[b]={k:b,v:true},a);reqWriteExcludeHeaderDump+net/http/httputil.reqWriteExcludeHeaderDump %    Y=C.New("sentinel error value");
errors.Newnet/http/httputil.errNoBody %    AA=F.NopCloser(J.NewReader(""));io/ioutil.NopClosernet/http/httputil.emptyBodystrings.NewReader *    $pkg.ErrLineTooLong=L.ErrLineTooLong;ErrLineTooLong net/http/httputil.ErrLineTooLong net/http/internal.ErrLineTooLong P    $pkg.ErrPersistEOF=new H.ProtocolError.ptr("persistent connection closed");ErrPersistEOFnet/http.ProtocolErrornet/http/httputil.ErrPersistEOF I    $pkg.ErrClosed=new H.ProtocolError.ptr("connection closed by user");	ErrClosednet/http.ProtocolErrornet/http/httputil.ErrClosed @    $pkg.ErrPipeline=new H.ProtocolError.ptr("pipeline error");ErrPipelinenet/http.ProtocolErrornet/http/httputil.ErrPipeline 4    AE=C.New("i/o operation on closed connection");
errors.Newnet/http/httputil.errClosed ��    AP=new AS(["Connection","Keep-Alive","Proxy-Authenticate","Proxy-Authorization","Te","Trailers","Transfer-Encoding","Upgrade"]);
hopHeadersnet/http/httputil.ASnet/http/httputil.hopHeaders net/http/httputil.drainBodyP�P=function $b(c){var $ptr,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=[d];e=$ifaceNil;f=$ifaceNil;g=$ifaceNil;      c  gd[0]=$clone(new B.Buffer.ptr(),B.Buffer);  y  |i=d[0].ReadFrom(c);$s=1;case 1:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;g=h[1];if(!($interfaceIsEqual(g,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �    j=$ifaceNil;k=$ifaceNil;l=g;e=j;f=k;g=l;return[e,f,g];    case 3:  �  �m=c.Close();$s=4;case 4:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}g=m;if(!($interfaceIsEqual(g,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  �    n=$ifaceNil;o=$ifaceNil;p=g;e=n;f=o;g=p;return[e,f,g];    case 6:  �    q=F.NopCloser(d[0]);r=F.NopCloser(B.NewReader(d[0].Bytes()));s=$ifaceNil;e=q;f=r;g=s;return[e,f,g];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};	drainBodybytes.Bufferbytes.NewReaderio/ioutil.NopClosernet/http/httputil.drainBody #(*net/http/httputil.dumpConn).Close��Q.ptr.prototype.Close=function(){var $ptr,c;  �c=this;       return $ifaceNil;    };Q.prototype.Close=function(){return this.$val.Close();};dumpConnnet/http/httputil.dumpConn '(*net/http/httputil.dumpConn).LocalAddr��Q.ptr.prototype.LocalAddr=function(){var $ptr,c;  c=this;      Freturn $ifaceNil;    };Q.prototype.LocalAddr=function(){return this.$val.LocalAddr();};dumpConnnet/http/httputil.dumpConn ((*net/http/httputil.dumpConn).RemoteAddr��Q.ptr.prototype.RemoteAddr=function(){var $ptr,c;  Yc=this;      �return $ifaceNil;    };Q.prototype.RemoteAddr=function(){return this.$val.RemoteAddr();};dumpConnnet/http/httputil.dumpConn )(*net/http/httputil.dumpConn).SetDeadline��Q.ptr.prototype.SetDeadline=function(c){var $ptr,c,d;  �d=this;  �c=$clone(c,K.Time);      �return $ifaceNil;    };Q.prototype.SetDeadline=function(c){return this.$val.SetDeadline(c);};dumpConnnet/http/httputil.dumpConn	time.Time -(*net/http/httputil.dumpConn).SetReadDeadline��Q.ptr.prototype.SetReadDeadline=function(c){var $ptr,c,d;  �d=this;  c=$clone(c,K.Time);      return $ifaceNil;    };Q.prototype.SetReadDeadline=function(c){return this.$val.SetReadDeadline(c);};dumpConnnet/http/httputil.dumpConn	time.Time .(*net/http/httputil.dumpConn).SetWriteDeadline��Q.ptr.prototype.SetWriteDeadline=function(c){var $ptr,c,d;  +d=this;  Ic=$clone(c,K.Time);      ^return $ifaceNil;    };Q.prototype.SetWriteDeadline=function(c){return this.$val.SetWriteDeadline(c);};dumpConnnet/http/httputil.dumpConn	time.Time $(net/http/httputil.neverEnding).Read��R.prototype.Read=function(c){var $ptr,c,d,e,f,g,h,i,j,k;d=0;e=$ifaceNil;  �f=this.$val;      �g=c;h=0;while(true){if(!(h<g.$length)){break;}i=h;  �((i<0||i>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+i]=(f<<24>>>24));    h++;}  �    j=c.$length;k=$ifaceNil;d=j;e=k;return[d,e];    };$ptrType(R).prototype.Read=function(c){return new R(this.$get()).Read(c);};neverEndingnet/http/httputil.neverEnding  net/http/httputil.DumpRequestOutS�RS=$pkg.DumpRequestOut=function $b(c,d){var $ptr,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);e=[e];f=[f];g=[g];h=[h];      �i=c.Body;  �j=false;  �if(!d||$interfaceIsEqual(c.Body,$ifaceNil)){$s=1;continue;}$s=2;continue;    case 1:  c.Body=$ifaceNil;      if(!((k=c.ContentLength,(k.$high===0&&k.$low===0)))){  2c.Body=F.NopCloser(E.LimitReader(new R(120),c.ContentLength));  �j=true;    }    $s=3;continue;case 2:  �  �l=$ifaceNil;  �n=P(c.Body);$s=4;case 4:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;i=m[0];c.Body=m[1];l=m[2];  �    if(!($interfaceIsEqual(l,$ifaceNil))){  �return[AT.nil,l];    }    case 3:  	o=c;  	    if(c.URL.Scheme==="https"){  	?o=new H.Request.ptr();  	]$copy(o,c,H.Request);  	oo.URL=new I.URL.ptr();  	�$copy(o.URL,c.URL,I.URL);  	�o.URL.Scheme="http";    }  
�  
�g[0]=$clone(new B.Buffer.ptr(),B.Buffer);   p=E.Pipe();e[0]=p[0];h[0]=p[1];  $deferred.push([$methodVal(e[0],"Close"),[]]);  '$deferred.push([$methodVal(h[0],"Close"),[]]);  9f[0]=new T.ptr(new AU(0),$ifaceNil);  �$go((function(e,f,g,h){return function $b(){var $ptr,q,r,s,t,u,v,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �r=H.ReadRequest(A.NewReader(e[0]));$s=1;case 1:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;s=q[0];t=q[1];  �if($interfaceIsEqual(t,$ifaceNil)){$s=2;continue;}$s=3;continue;    case 2:  Ku=E.Copy(F.Discard,s.Body);$s=4;case 4:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}u;  pv=s.Body.Close();$s=5;case 5:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}v;    case 3:  �    $r=$send(f[0].c,J.NewReader("HTTP/1.1 204 No Content\r\n\r\n"));$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$r=$r;return $f;};})(e,f,g,h),[]);  �q=new H.Transport.ptr(new N.Mutex.ptr(),false,false,false,new N.Mutex.ptr(),false,new N.RWMutex.ptr(),false,$throwNilPointerError,(function(e,f,g,h){return function(q,r){var $ptr,q,r;      2return[new Q.ptr(E.MultiWriter(new AW([g[0],h[0]])),f[0]),$ifaceNil];    };})(e,f,g,h),$throwNilPointerError,AV.nil,new K.Duration(0,0),true,false,0,new K.Duration(0,0));  ps=q.RoundTrip(o);$s=5;case 5:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}r=s;t=r[1];  �c.Body=i;  �    if(!($interfaceIsEqual(t,$ifaceNil))){  �return[AT.nil,t];    }  �u=g[0].Bytes();  �    if(j){    v=B.Index(u,new AT($stringToBytes("\r\n\r\n")));    if(v>=0){  Gu=$subslice(u,0,(v+4>>0));    }    }  areturn[u,$ifaceNil];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return[AT.nil,$ifaceNil];}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};DumpRequestOutbufio.NewReaderbytes.Bufferbytes.Indexcrypto/tls.Configio.Copyio.LimitReaderio.MultiWriterio.Pipe	io.Reader	io.Writerio/ioutil.Discardio/ioutil.NopClosernet/http.ReadRequestnet/http.Requestnet/http.Transportnet/http/httputil.ATnet/http/httputil.AUnet/http/httputil.AVnet/http/httputil.AW net/http/httputil.DumpRequestOut net/http/httputil.delegateReadernet/http/httputil.drainBodynet/http/httputil.dumpConnnet/http/httputil.neverEndingnet/url.URLstrings.NewReader
sync.Mutexsync.RWMutextime.Duration ((*net/http/httputil.delegateReader).Read��T.ptr.prototype.Read=function $b(c){var $ptr,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  8d=this;      jif($interfaceIsEqual(d.r,$ifaceNil)){$s=1;continue;}$s=2;continue;    case 1:  |e=$recv(d.c);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d.r=e[0];    case 2:  �f=d.r.Read(c);$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}return f;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.Read=function(c){return this.$val.Read(c);};delegateReader net/http/httputil.delegateReader  net/http/httputil.valueOrDefaultUcU=function(c,d){var $ptr,c,d;      �    if(!(c==="")){  return c;    }  #return d;    };valueOrDefault net/http/httputil.valueOrDefault  net/http/httputil.dumpAsReceivedW?W=function(c,d){var $ptr,c,d;      �return $ifaceNil;    };dumpAsReceived net/http/httputil.dumpAsReceived net/http/httputil.DumpRequestX��X=$pkg.DumpRequest=function $b(c,d){var $ptr,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=[e];f=AT.nil;g=$ifaceNil;      �h=c.Body;  �if(!d||$interfaceIsEqual(c.Body,$ifaceNil)){$s=1;continue;}$s=2;continue;    case 1:  �c.Body=$ifaceNil;    $s=3;continue;case 2:  �j=P(c.Body);$s=4;case 4:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;h=i[0];c.Body=i[1];g=i[2];      if(!($interfaceIsEqual(g,$ifaceNil))){  %return[f,g];    }    case 3:  5  9e[0]=$clone(new B.Buffer.ptr(),B.Buffer);  Jk=D.Fprintf(e[0],"%s %s HTTP/%d.%d\r\n",new AX([new $String(U(c.Method,"GET")),new $String(c.URL.RequestURI()),new $Int(c.ProtoMajor),new $Int(c.ProtoMinor)]));$s=5;case 5:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}k;  �l=c.Host;  �    if(l===""&&!(c.URL===AY.nil)){  l=c.URL.Host;    }  if(!(l==="")){$s=6;continue;}$s=7;continue;    case 6:  /m=D.Fprintf(e[0],"Host: %s\r\n",new AX([new $String(l)]));$s=8;case 8:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}m;    case 7:  Zo=c.TransferEncoding.$length>0&&(n=c.TransferEncoding,(0>=n.$length?$throwRuntimeError("index out of range"):n.$array[n.$offset+0]))==="chunked";  �if(c.TransferEncoding.$length>0){$s=9;continue;}$s=10;continue;    case 9:  �p=D.Fprintf(e[0],"Transfer-Encoding: %s\r\n",new AX([new $String(J.Join(c.TransferEncoding,","))]));$s=11;case 11:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}p;    case 10:  +if(c.Close){$s=12;continue;}$s=13;continue;    case 12:  <q=D.Fprintf(e[0],"Connection: close\r\n",new AX([]));$s=14;case 14:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}q;    case 13:  jr=new H.Header(c.Header).WriteSubset(e[0],V);$s=15;case 15:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}g=r;  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �return[f,g];    }  �s=E.WriteString(e[0],"\r\n");$s=16;case 16:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}s;  �if(!($interfaceIsEqual(c.Body,$ifaceNil))){$s=17;continue;}$s=18;continue;    case 17:  �  �t=e[0];      if(o){  #t=AD(t);    }  Gv=E.Copy(t,c.Body);$s=19;case 19:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;g=u[1];  jif(o){$s=20;continue;}$s=21;continue;    case 20:  zw=$assertType(t,E.Closer).Close();$s=22;case 22:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}w;  �x=E.WriteString(e[0],"\r\n");$s=23;case 23:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}x;    case 21:    case 18:  �c.Body=h;  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �return[f,g];    }  �f=e[0].Bytes();  �return[f,g];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.$s=$s;$f.$r=$r;return $f;};DumpRequestbytes.Bufferfmt.Fprintf	io.Closerio.Copyio.WriteStringnet/http.Headernet/http/httputil.ATnet/http/httputil.AXnet/http/httputil.AYnet/http/httputil.DumpRequest"net/http/httputil.NewChunkedWriternet/http/httputil.drainBody+net/http/httputil.reqWriteExcludeHeaderDump net/http/httputil.valueOrDefaultnet/url.URLstrings.Join *(net/http/httputil.failureToReadBody).Read��Z.ptr.prototype.Read=function(c){var $ptr,c;      �return[0,Y];    };Z.prototype.Read=function(c){return this.$val.Read(c);};failureToReadBodynet/http/httputil.errNoBody#net/http/httputil.failureToReadBody +(net/http/httputil.failureToReadBody).Close��Z.ptr.prototype.Close=function(){var $ptr;      Dreturn $ifaceNil;    };Z.prototype.Close=function(){return this.$val.Close();};failureToReadBody#net/http/httputil.failureToReadBody net/http/httputil.DumpResponseAB��AB=$pkg.DumpResponse=function $b(c,d){var $ptr,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=[e];f=AT.nil;g=$ifaceNil;        e[0]=$clone(new B.Buffer.ptr(),B.Buffer);  'h=c.Body;  :i=c.ContentLength;  Yif(!d){$s=1;continue;}if($interfaceIsEqual(c.Body,$ifaceNil)){$s=2;continue;}$s=3;continue;    case 1:  fc.Body=(j=new Z.ptr(),new j.constructor.elem(j));    $s=4;continue;    case 2:  �c.Body=AA;    $s=4;continue;case 3:  �l=P(c.Body);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;h=k[0];c.Body=k[1];g=k[2];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  	return[f,g];    }    case 4:  m=c.Write(e[0]);$s=6;case 6:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}g=m;  .    if($interfaceIsEqual(g,Y)){  Fg=$ifaceNil;    }  Tc.Body=h;  fc.ContentLength=i;  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �    n=AT.nil;o=g;f=n;g=o;return[f,g];    }  �    p=e[0].Bytes();q=$ifaceNil;f=p;g=q;return[f,g];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};DumpResponsebytes.Buffernet/http/httputil.ATnet/http/httputil.DumpResponsenet/http/httputil.drainBodynet/http/httputil.emptyBodynet/http/httputil.errNoBody#net/http/httputil.failureToReadBody "net/http/httputil.NewChunkedReaderAC^AC=$pkg.NewChunkedReader=function(c){var $ptr,c;       �return L.NewChunkedReader(c);    };NewChunkedReader"net/http/httputil.NewChunkedReader"net/http/internal.NewChunkedReader "net/http/httputil.NewChunkedWriterAD^AD=$pkg.NewChunkedWriter=function(c){var $ptr,c;      #return L.NewChunkedWriter(c);    };NewChunkedWriter"net/http/httputil.NewChunkedWriter"net/http/internal.NewChunkedWriter net/http/httputil.NewServerConnAG��AG=$pkg.NewServerConn=function(c,d){var $ptr,c,d;      *�    if(d===AZ.nil){  *�d=A.NewReader(c);    }  +return new AF.ptr(new N.Mutex.ptr(),c,d,$ifaceNil,$ifaceNil,$ifaceNil,0,0,new $Map(),new M.Pipeline.ptr());    };NewServerConnbufio.NewReaderbufio.Readernet/http/httputil.AZnet/http/httputil.NewServerConnnet/http/httputil.ServerConnnet/textproto.Pipeline
sync.Mutex &(*net/http/httputil.ServerConn).Hijack��AF.ptr.prototype.Hijack=function $b(){var $ptr,c,d,e,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c=$ifaceNil;d=AZ.nil;  ,we=this;      ,�$r=e.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  ,�$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  ,�c=e.c;  ,�d=e.r;  ,�e.c=$ifaceNil;  ,�e.r=AZ.nil;  -return[c,d];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[c,d];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AF.prototype.Hijack=function(){return this.$val.Hijack();};
ServerConnnet/http/httputil.AZnet/http/httputil.ServerConn %(*net/http/httputil.ServerConn).Close�	AF.ptr.prototype.Close=function $b(){var $ptr,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  -Vc=this;      -we=c.Hijack();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];  -�if(!($interfaceIsEqual(f,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  -�g=f.Close();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}return g;    case 3:  -�return $ifaceNil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};AF.prototype.Close=function(){return this.$val.Close();};
ServerConnnet/http/httputil.ServerConn $(*net/http/httputil.ServerConn).Read�NAF.ptr.prototype.Read=function $b(){var $ptr,aa,ab,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;aa=$f.aa;ab=$f.ab;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c=[c];d=[d];e=[e];e[0]=BA.nil;f=$ifaceNil;  .�c[0]=this;      /3g=c[0].pipe.Next();$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}d[0]=g;  /I$r=c[0].pipe.StartRequest(d[0]);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  /c$deferred.push([(function(c,d,e){return function $b(){var $ptr,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      /t$r=c[0].pipe.EndRequest(d[0]);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  /�if(e[0]===BA.nil){$s=2;continue;}$s=3;continue;    case 2:  /�$r=c[0].pipe.StartResponse(d[0]);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  /�$r=c[0].pipe.EndResponse(d[0]);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=4;continue;case 3:  0$r=c[0].lk.Lock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0"h=e[0];(c[0].pipereq||$throwRuntimeError("assignment to entry in nil map"))[h.$key()]={k:h,v:d[0]};  0:$r=c[0].lk.Unlock();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 4:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};})(c,d,e),[]]);  0T$r=c[0].lk.Lock();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0bif(!($interfaceIsEqual(c[0].we,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  0�$deferred.push([$methodVal(c[0].lk,"Unlock"),[]]);  0�    h=BA.nil;i=c[0].we;e[0]=h;f=i;return[e[0],f];    case 5:  0�if(!($interfaceIsEqual(c[0].re,$ifaceNil))){$s=6;continue;}$s=7;continue;    case 6:  0�$deferred.push([$methodVal(c[0].lk,"Unlock"),[]]);  1    j=BA.nil;k=c[0].re;e[0]=j;f=k;return[e[0],f];    case 7:  1if(c[0].r===AZ.nil){$s=8;continue;}$s=9;continue;    case 8:  1Y$deferred.push([$methodVal(c[0].lk,"Unlock"),[]]);  1p    l=BA.nil;m=AE;e[0]=l;f=m;return[e[0],f];    case 9:  1�n=c[0].r;  1�o=c[0].lastbody;  1�c[0].lastbody=$ifaceNil;  1�$r=c[0].lk.Unlock();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  2if(!($interfaceIsEqual(o,$ifaceNil))){$s=11;continue;}$s=12;continue;    case 11:  2�p=o.Close();$s=13;case 13:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}f=p;  2�if(!($interfaceIsEqual(f,$ifaceNil))){$s=14;continue;}$s=15;continue;    case 14:  2�$r=c[0].lk.Lock();$s=16;case 16:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  2�$deferred.push([$methodVal(c[0].lk,"Unlock"),[]]);  3c[0].re=f;  3#    q=BA.nil;r=f;e[0]=q;f=r;return[e[0],f];    case 15:    case 12:  3<t=H.ReadRequest(n);$s=17;case 17:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}s=t;e[0]=s[0];f=s[1];  3\$r=c[0].lk.Lock();$s=18;case 18:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  3j$deferred.push([$methodVal(c[0].lk,"Unlock"),[]]);  3�    if(!($interfaceIsEqual(f,$ifaceNil))){  3�    if($interfaceIsEqual(f,E.ErrUnexpectedEOF)){  4Cc[0].re=$pkg.ErrPersistEOF;  4\    u=BA.nil;v=c[0].re;e[0]=u;f=v;return[e[0],f];    }else{  4|c[0].re=f;  4�    w=e[0];x=f;e[0]=w;f=x;return[e[0],f];    }    }  4�c[0].lastbody=e[0].Body;  4�  4�c[0].nread=c[0].nread+(1)>>0;      4�    if(e[0].Close){  4�c[0].re=$pkg.ErrPersistEOF;  4�    y=e[0];z=c[0].re;e[0]=y;f=z;return[e[0],f];    }  5    aa=e[0];ab=f;e[0]=aa;f=ab;return[e[0],f];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[e[0],f];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.aa=aa;$f.ab=ab;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AF.prototype.Read=function(){return this.$val.Read();};
ServerConnio.ErrUnexpectedEOFnet/http.ReadRequestnet/http.Requestnet/http/httputil.AZnet/http/httputil.BAnet/http/httputil.ErrPersistEOFnet/http/httputil.ServerConnnet/http/httputil.errClosed '(*net/http/httputil.ServerConn).Pending�[AF.ptr.prototype.Pending=function $b(){var $ptr,c,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  5�c=this;      5�$r=c.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  5�$deferred.push([$methodVal(c.lk,"Unlock"),[]]);  5�return c.nread-c.nwritten>>0;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return 0;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AF.prototype.Pending=function(){return this.$val.Pending();};
ServerConnnet/http/httputil.ServerConn %(*net/http/httputil.ServerConn).Write�
�AF.ptr.prototype.Write=function $b(c,d){var $ptr,c,d,e,f,g,h,i,j,k,l,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  6�e=this;      7`$r=e.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  7nf=(g=e.pipereq[c.$key()],g!==undefined?[g.v,true]:[0,false]);h=f[0];i=f[1];  7�delete e.pipereq[c.$key()];  7�if(!i){$s=2;continue;}$s=3;continue;    case 2:  7�$r=e.lk.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  7�return $pkg.ErrPipeline;    case 3:  7�$r=e.lk.Unlock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  8 $r=e.pipe.StartResponse(h);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  8$deferred.push([$methodVal(e.pipe,"EndResponse"),[h]]);  8;$r=e.lk.Lock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  8Iif(!($interfaceIsEqual(e.we,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  8]$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  8treturn e.we;    case 9:  8�if($interfaceIsEqual(e.c,$ifaceNil)){$s=10;continue;}$s=11;continue;    case 10:  8�$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  8�return $pkg.ErrClosed;    case 11:  8�j=e.c;  8�if(e.nread<=e.nwritten){$s=12;continue;}$s=13;continue;    case 12:  9$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  92return C.New("persist server pipe count");    case 13:  9e    if(d.Close){  :e.re=$pkg.ErrPersistEOF;    }  :%$r=e.lk.Unlock();$s=14;case 14:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  :6k=d.Write(j);$s=15;case 15:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;  :L$r=e.lk.Lock();$s=16;case 16:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  :Z$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  :p    if(!($interfaceIsEqual(l,$ifaceNil))){  :�e.we=l;  :�return l;    }  :�  :�e.nwritten=e.nwritten+(1)>>0;      :�return $ifaceNil;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AF.prototype.Write=function(c,d){return this.$val.Write(c,d);};
ServerConn
errors.Newnet/http/httputil.ErrClosednet/http/httputil.ErrPersistEOFnet/http/httputil.ErrPipelinenet/http/httputil.ServerConn net/http/httputil.NewClientConnAI�AI=$pkg.NewClientConn=function(c,d){var $ptr,c,d;      >�    if(d===AZ.nil){  >�d=A.NewReader(c);    }  ?	return new AH.ptr(new N.Mutex.ptr(),c,d,$ifaceNil,$ifaceNil,$ifaceNil,0,0,new $Map(),new M.Pipeline.ptr(),$methodExpr(BA.prototype.Write));    };NewClientConnbufio.NewReadernet/http/httputil.AZnet/http/httputil.BAnet/http/httputil.ClientConnnet/http/httputil.NewClientConnnet/textproto.Pipeline
sync.Mutex $net/http/httputil.NewProxyClientConnAJ��AJ=$pkg.NewProxyClientConn=function(c,d){var $ptr,c,d,e;      @�e=AI(c,d);  @�e.writeReq=$methodExpr(BA.prototype.WriteProxy);  @�return e;    };NewProxyClientConnnet/http/httputil.BAnet/http/httputil.NewClientConn$net/http/httputil.NewProxyClientConn &(*net/http/httputil.ClientConn).Hijack��AH.ptr.prototype.Hijack=function $b(){var $ptr,c,d,e,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c=$ifaceNil;d=AZ.nil;  B5e=this;      Bo$r=e.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  B}$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  B�c=e.c;  B�d=e.r;  B�e.c=$ifaceNil;  B�e.r=AZ.nil;  B�return[c,d];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[c,d];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AH.prototype.Hijack=function(){return this.$val.Hijack();};
ClientConnnet/http/httputil.AZnet/http/httputil.ClientConn %(*net/http/httputil.ClientConn).Close�	AH.ptr.prototype.Close=function $b(){var $ptr,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Cc=this;      C5e=c.Hijack();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];  CJif(!($interfaceIsEqual(f,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  CZg=f.Close();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}return g;    case 3:  Coreturn $ifaceNil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};AH.prototype.Close=function(){return this.$val.Close();};
ClientConnnet/http/httputil.ClientConn %(*net/http/httputil.ClientConn).Write��AH.ptr.prototype.Write=function $b(c){var $ptr,c,d,e,f,g,h,i,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c=[c];d=[d];e=[e];f=[f];f[0]=$ifaceNil;  Ed[0]=this;      Ehg=d[0].pipe.Next();$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}e[0]=g;  E~$r=d[0].pipe.StartRequest(e[0]);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  E�$deferred.push([(function(c,d,e,f){return function $b(){var $ptr,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      E�$r=d[0].pipe.EndRequest(e[0]);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  E�if(!($interfaceIsEqual(f[0],$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  E�$r=d[0].pipe.StartResponse(e[0]);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  E�$r=d[0].pipe.EndResponse(e[0]);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=4;continue;case 3:  FG$r=d[0].lk.Lock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  FWh=c[0];(d[0].pipereq||$throwRuntimeError("assignment to entry in nil map"))[h.$key()]={k:h,v:e[0]};  Fo$r=d[0].lk.Unlock();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 4:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};})(c,d,e,f),[]]);  F�$r=d[0].lk.Lock();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  F�if(!($interfaceIsEqual(d[0].re,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  F�$deferred.push([$methodVal(d[0].lk,"Unlock"),[]]);  F�    f[0]=d[0].re;return f[0];    case 5:  Gif(!($interfaceIsEqual(d[0].we,$ifaceNil))){$s=6;continue;}$s=7;continue;    case 6:  G$deferred.push([$methodVal(d[0].lk,"Unlock"),[]]);  G0    f[0]=d[0].we;return f[0];    case 7:  GAif($interfaceIsEqual(d[0].c,$ifaceNil)){$s=8;continue;}$s=9;continue;    case 8:  G�$deferred.push([$methodVal(d[0].lk,"Unlock"),[]]);  G�    f[0]=AE;return f[0];    case 9:  G�h=d[0].c;  G�    if(c[0].Close){  H/d[0].we=$pkg.ErrPersistEOF;    }  HI$r=d[0].lk.Unlock();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  HZi=d[0].writeReq(c[0],h);$s=11;case 11:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}f[0]=i;  Hu$r=d[0].lk.Lock();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  H�$deferred.push([$methodVal(d[0].lk,"Unlock"),[]]);  H�    if(!($interfaceIsEqual(f[0],$ifaceNil))){  H�d[0].we=f[0];  H�    f[0]=f[0];return f[0];    }  H�  H�d[0].nwritten=d[0].nwritten+(1)>>0;      H�    f[0]=$ifaceNil;return f[0];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return f[0];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AH.prototype.Write=function(c){return this.$val.Write(c);};
ClientConnnet/http/httputil.ClientConnnet/http/httputil.ErrPersistEOFnet/http/httputil.errClosed '(*net/http/httputil.ClientConn).Pending�[AH.ptr.prototype.Pending=function $b(){var $ptr,c,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  IKc=this;      Il$r=c.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  Iz$deferred.push([$methodVal(c.lk,"Unlock"),[]]);  I�return c.nwritten-c.nread>>0;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return 0;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AH.prototype.Pending=function(){return this.$val.Pending();};
ClientConnnet/http/httputil.ClientConn $(*net/http/httputil.ClientConn).Read��AH.ptr.prototype.Read=function $b(c){var $ptr,aa,ab,ac,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;aa=$f.aa;ab=$f.ab;ac=$f.ac;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=BB.nil;e=$ifaceNil;  J�f=this;      KN$r=f.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  K\g=(h=f.pipereq[c.$key()],h!==undefined?[h.v,true]:[0,false]);i=g[0];j=g[1];  Kwdelete f.pipereq[c.$key()];  K�if(!j){$s=2;continue;}$s=3;continue;    case 2:  K�$r=f.lk.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  K�    k=BB.nil;l=$pkg.ErrPipeline;d=k;e=l;return[d,e];    case 3:  K�$r=f.lk.Unlock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  K�$r=f.pipe.StartResponse(i);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  L$deferred.push([$methodVal(f.pipe,"EndResponse"),[i]]);  L.$r=f.lk.Lock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  L<if(!($interfaceIsEqual(f.re,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  LP$deferred.push([$methodVal(f.lk,"Unlock"),[]]);  Lg    m=BB.nil;n=f.re;d=m;e=n;return[d,e];    case 9:  L}if(f.r===AZ.nil){$s=10;continue;}$s=11;continue;    case 10:  L�$deferred.push([$methodVal(f.lk,"Unlock"),[]]);  L�    o=BB.nil;p=AE;d=o;e=p;return[d,e];    case 11:  L�q=f.r;  L�r=f.lastbody;  Mf.lastbody=$ifaceNil;  M%$r=f.lk.Unlock();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  M�if(!($interfaceIsEqual(r,$ifaceNil))){$s=13;continue;}$s=14;continue;    case 13:  N$s=r.Close();$s=15;case 15:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}e=s;  N=if(!($interfaceIsEqual(e,$ifaceNil))){$s=16;continue;}$s=17;continue;    case 16:  NP$r=f.lk.Lock();$s=18;case 18:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  N`$deferred.push([$methodVal(f.lk,"Unlock"),[]]);  Nxf.re=e;  N�    t=BB.nil;u=e;d=t;e=u;return[d,e];    case 17:    case 14:  N�w=H.ReadResponse(q,c);$s=19;case 19:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}v=w;d=v[0];e=v[1];  N�$r=f.lk.Lock();$s=20;case 20:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  N�$deferred.push([$methodVal(f.lk,"Unlock"),[]]);  N�    if(!($interfaceIsEqual(e,$ifaceNil))){  N�f.re=e;  O    x=d;y=e;d=x;e=y;return[d,e];    }  O f.lastbody=d.Body;  O:  O:f.nread=f.nread+(1)>>0;      OG    if(d.Close){  OYf.re=$pkg.ErrPersistEOF;  O�    z=d;aa=f.re;d=z;e=aa;return[d,e];    }  O�    ab=d;ac=e;d=ab;e=ac;return[d,e];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[d,e];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AH.prototype.Read=function(c){return this.$val.Read(c);};
ClientConnnet/http.ReadResponsenet/http.Responsenet/http/httputil.AZnet/http/httputil.BBnet/http/httputil.ClientConnnet/http/httputil.ErrPersistEOFnet/http/httputil.ErrPipelinenet/http/httputil.errClosed "(*net/http/httputil.ClientConn).Do�AH.ptr.prototype.Do=function $b(c){var $ptr,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=BB.nil;e=$ifaceNil;  P
f=this;      PTg=f.Write(c);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}e=g;  Pi    if(!($interfaceIsEqual(e,$ifaceNil))){  P{return[d,e];    }  P�    i=f.Read(c);$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;d=h[0];e=h[1];return[d,e];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};AH.prototype.Do=function(c){return this.$val.Do(c);};
ClientConnnet/http/httputil.BBnet/http/httputil.ClientConn $net/http/httputil.singleJoiningSlashAM��AM=function(c,d){var $ptr,c,d,e,f;      U�e=J.HasSuffix(c,"/");  V f=J.HasPrefix(d,"/");  VE  VOif(e&&f){  Vhreturn c+d.substring(1);      Vz}else if(!e&&!f){  V�return c+"/"+d;    }  V�return c+d;    };singleJoiningSlash$net/http/httputil.singleJoiningSlashstrings.HasPrefixstrings.HasSuffix +net/http/httputil.NewSingleHostReverseProxyAN��AN=$pkg.NewSingleHostReverseProxy=function(c){var $ptr,c,d,e;      W�d=c.RawQuery;  Xe=(function(e){var $ptr,e;      XCe.URL.Scheme=c.Scheme;  Xde.URL.Host=c.Host;  X�e.URL.Path=AM(c.Path,e.URL.Path);  X�    if(d===""||e.URL.RawQuery===""){  X�e.URL.RawQuery=d+e.URL.RawQuery;    }else{  Y4e.URL.RawQuery=d+"&"+e.URL.RawQuery;    }    });  Ytreturn new AL.ptr(e,$ifaceNil,new K.Duration(0,0),BC.nil);    };NewSingleHostReverseProxy
log.Loggernet/http/httputil.BC+net/http/httputil.NewSingleHostReverseProxynet/http/httputil.ReverseProxy$net/http/httputil.singleJoiningSlashtime.Duration net/http/httputil.copyHeaderAO�AO=function(c,d){var $ptr,c,d,e,f,g,h,i,j,k,l,m;      Y�e=d;f=0;g=$keys(e);while(true){if(!(f<g.length)){break;}h=e[g[f]];        if(h===undefined){    f++;continue;    }i=h.k;j=h.v;  Y�k=j;l=0;while(true){if(!(l<k.$length)){break;}m=((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]);  Y�new H.Header(c).Add(i,m);    l++;}    f++;}    };
copyHeadernet/http.Headernet/http/httputil.copyHeader +(*net/http/httputil.ReverseProxy).ServeHTTP�BAL.ptr.prototype.ServeHTTP=function $b(c,d){var $ptr,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  [[e=this;      [�f=e.Transport;  [�    if($interfaceIsEqual(f,$ifaceNil)){  [�f=H.DefaultTransport;    }  [�g=new H.Request.ptr();  \$copy(g,d,H.Request);  \X$r=e.Director(g);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  \lg.Proto="HTTP/1.1";  \�g.ProtoMajor=1;  \�g.ProtoMinor=1;  \�g.Close=false;  ]�h=false;  ^i=AP;j=0;while(true){if(!(j<i.$length)){break;}k=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  ^(    if(!(new H.Header(g.Header).Get(k)==="")){  ^K    if(!h){  ^cg.Header=new $Map();  ^�AO(g.Header,d.Header);  ^�h=true;    }  ^�new H.Header(g.Header).Del(k);    }    j++;}  ^�  ^�l=G.SplitHostPort(d.RemoteAddr);m=l[0];n=l[2];    if($interfaceIsEqual(n,$ifaceNil)){  _�  _�o=(p=g.Header["X-Forwarded-For"],p!==undefined?[p.v,true]:[AS.nil,false]);q=o[0];r=o[1];    if(r){  `
m=J.Join(q,", ")+", "+m;    }  `Gnew H.Header(g.Header).Set("X-Forwarded-For",m);    }  `{t=f.RoundTrip(g);$s=2;case 2:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}s=t;u=s[0];v=s[1];  `�if(!($interfaceIsEqual(v,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  `�$r=e.logf("http: proxy error: %v",new AX([v]));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  `�$r=c.WriteHeader(500);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  areturn;    case 4:  a$deferred.push([$methodVal(u.Body,"Close"),[]]);  a2w=AP;x=0;while(true){if(!(x<w.$length)){break;}y=((x<0||x>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+x]);  aSnew H.Header(u.Header).Del(y);    x++;}  ajz=c.Header();$s=7;case 7:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}$r=AO(z,u.Header);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  a�$r=c.WriteHeader(u.StatusCode);$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  a�$r=e.copyResponse(c,u.Body);$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AL.prototype.ServeHTTP=function(c,d){return this.$val.ServeHTTP(c,d);};ReverseProxynet.SplitHostPortnet/http.DefaultTransportnet/http.Headernet/http.Requestnet/http/httputil.ASnet/http/httputil.AXnet/http/httputil.ReverseProxynet/http/httputil.copyHeadernet/http/httputil.copyResponse~net/http/httputil.hopHeadersnet/http/httputil.logf~strings.Join .(*net/http/httputil.ReverseProxy).copyResponse�AL.ptr.prototype.copyResponse=function $b(c,d){var $ptr,c,d,e,f,g,h,i,j,k,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  a�e=this;      bif(!((f=e.FlushInterval,(f.$high===0&&f.$low===0)))){$s=1;continue;}$s=2;continue;    case 1:  b1  b4g=$assertType(c,AQ,true);h=g[0];i=g[1];if(i){$s=3;continue;}$s=4;continue;    case 3:  bZj=new AR.ptr(h,e.FlushInterval,new N.Mutex.ptr(),new BD(0));  b�$go($methodVal(j,"flushLoop"),[]);  b�$deferred.push([$methodVal(j,"stop"),[]]);  b�c=j;    case 4:    case 2:  ck=E.Copy(c,d);$s=5;case 5:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}k;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AL.prototype.copyResponse=function(c,d){return this.$val.copyResponse(c,d);};ReverseProxycopyResponse~	io.Copynet/http/httputil.BDnet/http/httputil.ReverseProxynet/http/httputil.flushLoop~"net/http/httputil.maxLatencyWriternet/http/httputil.stop~net/http/httputil.writeFlusher
sync.Mutextime.Duration &(*net/http/httputil.ReverseProxy).logf��AL.ptr.prototype.logf=function $b(c,d){var $ptr,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  c!e=this;      c^if(!(e.ErrorLog===BC.nil)){$s=1;continue;}$s=2;continue;    case 1:  cw$r=e.ErrorLog.Printf(c,d);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=3;continue;case 2:  c�$r=O.Printf(c,d);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 3:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};AL.prototype.logf=function(c,d){return this.$val.logf(c,d);};ReverseProxylogf~
log.Printfnet/http/httputil.BCnet/http/httputil.ReverseProxy +(*net/http/httputil.maxLatencyWriter).Write��AR.ptr.prototype.Write=function $b(c){var $ptr,c,d,e,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  d�d=this;      d�$r=d.lk.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  d�$deferred.push([$methodVal(d.lk,"Unlock"),[]]);  d�e=d.dst.Write(c);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}return e;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return[0,$ifaceNil];}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AR.prototype.Write=function(c){return this.$val.Write(c);};maxLatencyWriter"net/http/httputil.maxLatencyWriter /(*net/http/httputil.maxLatencyWriter).flushLoop�&AR.ptr.prototype.flushLoop=function $b(){var $ptr,c,d,e,f,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  e	c=this;      e-d=K.NewTicker(c.latency);  eM$deferred.push([$methodVal(d,"Stop"),[]]);  e]case 1:  eef=$select([[c.done],[d.C]]);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;if(e[0]===0){$s=4;continue;}if(e[0]===1){$s=5;continue;}$s=6;continue;    case 4:  e�if(!(AK===$throwNilPointerError)){$s=7;continue;}$s=8;continue;    case 7:  e�$r=AK();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 8:  e�return;    $s=6;continue;    case 5:  e�$r=c.lk.Lock();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  e�$r=c.dst.Flush();$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  e�$r=c.lk.Unlock();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 6:    $s=1;continue;case 2:    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AR.prototype.flushLoop=function(){return this.$val.flushLoop();};maxLatencyWriter
flushLoop~"net/http/httputil.maxLatencyWriter!net/http/httputil.onExitFlushLooptime.NewTicker *(*net/http/httputil.maxLatencyWriter).stop��AR.ptr.prototype.stop=function $b(){var $ptr,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  fc=this;      f0    $r=$send(c.done,true);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};AR.prototype.stop=function(){return this.$val.stop();};maxLatencyWriterstop~"net/http/httputil.maxLatencyWriter ��{"Base":26178,"Files":[{"Name":"/usr/local/go/src/net/http/httputil/dump.go","Base":1,"Size":7616,"Lines":[0,55,109,159,160,177,178,187,196,205,215,222,228,241,248,260,271,282,290,292,293,366,445,522,541,609,631,674,697,700,734,757,760,844,846,847,918,941,952,963,965,966,1036,1106,1176,1246,1316,1386,1387,1409,1410,1467,1487,1504,1507,1527,1529,1530,1581,1631,1654,1722,1740,1760,1791,1808,1838,1922,1942,1946,1956,1972,2016,2034,2053,2057,2060,2061,2131,2192,2255,2316,2332,2364,2394,2412,2441,2467,2497,2500,2501,2564,2624,2682,2743,2770,2814,2835,2853,2871,2919,2983,2996,3048,3066,3111,3143,3180,3200,3204,3267,3272,3273,3296,3323,3374,3429,3434,3437,3438,3470,3471,3488,3505,3523,3526,3547,3548,3598,3662,3725,3787,3833,3849,3907,3928,3932,3935,3953,3955,3956,4020,4053,4082,4100,4142,4144,4145,4200,4217,4231,4234,4254,4256,4257,4301,4349,4367,4382,4385,4397,4399,4400,4449,4505,4533,4561,4589,4591,4592,4661,4732,4748,4808,4820,4822,4823,4890,4947,5003,5060,5112,5177,5197,5271,5289,5320,5337,5347,5391,5409,5419,5423,5426,5427,5447,5448,5524,5580,5581,5599,5634,5656,5659,5676,5716,5719,5720,5802,5838,5926,5929,5945,5988,5991,5992,6053,6070,6079,6082,6083,6111,6112,6134,6160,6175,6208,6212,6247,6262,6290,6320,6324,6327,6328,6345,6362,6371,6374,6392,6400,6402,6403,6485,6527,6578,6579,6650,6719,6786,6818,6850,6851,6926,6992,6993,7049,7050,7108,7185,7205,7224,7254,7255,7267,7301,7331,7355,7365,7411,7429,7439,7443,7446,7468,7491,7503,7506,7524,7553,7570,7588,7591,7614],"Infos":null},{"Name":"/usr/local/go/src/net/http/httputil/httputil.go","Base":7618,"Size":1545,"Lines":[0,55,109,159,160,231,276,293,294,303,309,330,332,333,418,471,546,549,624,688,735,772,774,775,856,937,1005,1008,1075,1138,1204,1273,1309,1361,1398,1400,1401,1467,1500],"Infos":null},{"Name":"/usr/local/go/src/net/http/httputil/persist.go","Base":9164,"Size":11472,"Lines":[0,55,109,159,160,177,178,187,196,206,212,219,231,248,256,258,259,265,347,426,494,496,497,555,620,685,686,756,830,899,974,1049,1083,1086,1161,1189,1214,1286,1312,1343,1387,1418,1439,1479,1480,1505,1507,1508,1585,1633,1636,1711,1739,1801,1816,1841,1844,1915,1917,1918,1998,2074,2151,2213,2276,2290,2312,2322,2332,2344,2356,2364,2366,2367,2436,2474,2495,2510,2529,2532,2544,2546,2547,2625,2704,2781,2806,2868,2869,2918,2940,2966,2982,3007,3025,3054,3081,3092,3139,3155,3179,3197,3201,3206,3207,3221,3293,3316,3336,3339,3358,3381,3401,3404,3467,3490,3514,3517,3528,3553,3572,3588,3589,3665,3687,3753,3811,3826,3851,3869,3885,3909,3924,3943,3947,3950,3951,3983,3997,4019,4036,4070,4125,4183,4212,4237,4258,4269,4284,4303,4307,4310,4334,4346,4362,4386,4406,4409,4426,4428,4429,4482,4528,4566,4580,4602,4633,4635,4636,4721,4799,4875,4951,4952,5011,5025,5052,5077,5087,5104,5125,5128,5144,5145,5171,5198,5229,5230,5244,5263,5286,5301,5304,5367,5390,5409,5412,5423,5453,5476,5525,5528,5545,5607,5670,5693,5717,5720,5736,5737,5759,5773,5795,5812,5826,5839,5842,5857,5858,5870,5872,5873,5943,6012,6067,6141,6144,6212,6260,6285,6357,6383,6414,6458,6489,6510,6550,6551,6580,6627,6629,6630,6708,6756,6759,6829,6867,6929,6944,6969,6972,6993,7008,7023,7065,7100,7103,7105,7106,7173,7211,7214,7275,7321,7388,7415,7457,7468,7470,7471,7551,7627,7701,7779,7842,7856,7878,7888,7898,7910,7922,7930,7932,7933,8002,8040,8061,8076,8095,8098,8110,8112,8113,8193,8270,8350,8425,8502,8563,8564,8603,8625,8651,8667,8692,8710,8739,8766,8777,8824,8840,8864,8882,8886,8891,8892,8906,8975,8998,9013,9016,9035,9058,9073,9076,9139,9162,9181,9184,9195,9211,9272,9313,9337,9340,9356,9357,9384,9398,9420,9437,9451,9464,9467,9482,9483,9495,9497,9498,9551,9593,9631,9645,9667,9698,9700,9701,9774,9846,9918,9973,10054,10113,10127,10154,10179,10189,10206,10232,10235,10251,10252,10278,10305,10336,10337,10351,10370,10393,10413,10416,10479,10502,10526,10529,10540,10565,10584,10600,10601,10677,10699,10765,10823,10838,10863,10881,10897,10921,10936,10955,10959,10962,10963,11002,11016,11038,11055,11069,11088,11091,11116,11117,11129,11130,11147,11203,11224,11227,11245,11247,11248,11320,11399,11420,11437,11446,11449,11470],"Infos":null},{"Name":"/usr/local/go/src/net/http/httputil/reverseproxy.go","Base":20637,"Size":5540,"Lines":[0,55,109,159,160,190,191,208,209,218,224,231,238,250,261,272,280,288,290,291,364,390,417,418,488,553,564,591,638,684,733,777,807,808,858,901,930,931,978,1023,1042,1085,1114,1115,1168,1221,1281,1302,1324,1326,1327,1373,1410,1447,1457,1481,1500,1526,1547,1550,1564,1566,1567,1637,1707,1776,1821,1885,1917,1956,1989,2018,2081,2132,2185,2196,2255,2259,2262,2304,2306,2307,2347,2373,2398,2415,2419,2422,2424,2425,2492,2550,2577,2592,2607,2630,2654,2694,2707,2729,2741,2743,2744,2822,2848,2871,2907,2910,2911,2940,3001,3002,3022,3049,3072,3095,3117,3118,3176,3235,3299,3358,3409,3433,3465,3499,3522,3560,3602,3627,3632,3656,3660,3663,3664,3736,3783,3833,3889,3946,4004,4008,4057,4060,4061,4102,4119,4158,4207,4216,4219,4243,4244,4276,4296,4299,4300,4337,4338,4370,4400,4402,4403,4471,4498,4538,4567,4584,4614,4644,4649,4671,4691,4704,4708,4711,4712,4731,4733,4734,4800,4824,4861,4871,4901,4904,4906,4907,4937,4948,4962,4964,4965,4996,5018,5041,5042,5085,5101,5103,5104,5162,5175,5196,5219,5221,5222,5263,5295,5311,5318,5329,5346,5377,5399,5404,5414,5428,5443,5460,5477,5481,5484,5486,5487],"Infos":null}]}
 