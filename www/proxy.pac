function FindProxyForURL(url, host)
{
   if (isInNet(host, "192.168.1.0", "255.255.255.0")) {
      return "DIRECT";
   } else {
      if (shExpMatch(url, "http:*")) 
         return "PROXY 192.168.1.130:3128" ;
      if (shExpMatch(url, "https:*"))
         return "PROXY 192.168.1.130:3128" ;
      if (shExpMatch(url, "ftp:*"))
         return "PROXY 192.168.1.130:3128" ;
      return "DIRECT";
   }
}