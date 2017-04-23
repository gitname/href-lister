javascript: (function() {

    /* We start with an empty array of HREF values. */
    var hrefs = [];

    /* We only care about HREF values that begin with this string. */
    var myPrefix = "http://www.example";

    /* Get all the anchor elements on the page. */
    var anchors = document.getElementsByTagName('a');

    /* Get all the values of their HREF attributes. */
    for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].hasAttribute("href")) {
            hrefs.push(anchors[i].href);
        }
    }

    /* Filter out the values that don't start with the string we defined earlier. */
    hrefs = hrefs.filter(function(el) {
        return el.startsWith(myPrefix);
    });

    /* Log the HREF values to the console. */
    console.log(hrefs.join("\n"));

    /* Write the HREF values to the page. */
    var text = document.createTextNode(hrefs.join("\n"));
    var pre = document.createElement("pre");
    pre.appendChild(text);
    document.body.appendChild(pre);

}());
