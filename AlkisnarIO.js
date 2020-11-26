//DnyamoDB Counter for the GatewayAPI for the landing page

URL myurl = new URL("https://b7kwlfbchk.execute-api.us-east-1.amazonaws.com/Version1/WebsiteHitCounterDynamoDBupdate")
URLConnection myURLConnection = myURL.openConnection();
    myURLConnection.connect();

<script>

    URL url = new URL("https://b7kwlfbchk.execute-api.us-east-1.amazonaws.com/Version1/WebsiteHitCounterDynamoDBupdate");
   HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
   try {
     InputStream in = new BufferedInputStream(urlConnection.getInputStream());
     readStream(in);
   } finally {
     urlConnection.disconnect();
   }
   
</script>









