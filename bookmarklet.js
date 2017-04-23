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
    var textarea = document.createElement("textarea");
    textarea.style["border"] = "2px solid #000";
    textarea.style["font-family"] = "monospace";
    textarea.style["padding"] = "1em";
    textarea.style["width"] = "100%";
    textarea.rows = hrefs.length;
    textarea.innerHTML = hrefs.join("\n");
    document.body.appendChild(textarea);

}());
