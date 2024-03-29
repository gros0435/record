<html>
<head>
<title>script.js</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
.s0 { color: #bcbec4;}
.s1 { color: #7a7e85;}
.s2 { color: #cf8e6d;}
.s3 { color: #bcbec4;}
.s4 { color: #6aab73;}
</style>
</head>
<body bgcolor="#1e1f22">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#606060" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
script.js</font>
</center></td></tr></table>
<pre>
<span class="s1">// vinyl animation toggle</span>

<span class="s2">var </span><span class="s0">animationRunning </span><span class="s3">= </span><span class="s2">true</span><span class="s3">;</span>
<span class="s2">var </span><span class="s0">animatedElement </span><span class="s3">= </span><span class="s0">document</span><span class="s3">.</span><span class="s0">querySelector</span><span class="s3">(</span><span class="s4">'.vinyl'</span><span class="s3">);</span>

<span class="s2">function </span><span class="s0">toggleAnimation</span><span class="s3">() {</span>
    <span class="s2">if </span><span class="s3">(</span><span class="s0">animationRunning</span><span class="s3">) {</span>
        <span class="s0">animatedElement</span><span class="s3">.</span><span class="s0">style</span><span class="s3">.</span><span class="s0">animationPlayState </span><span class="s3">= </span><span class="s4">'paused'</span><span class="s3">;</span>
    <span class="s3">} </span><span class="s2">else </span><span class="s3">{</span>
        <span class="s0">animatedElement</span><span class="s3">.</span><span class="s0">style</span><span class="s3">.</span><span class="s0">animationPlayState </span><span class="s3">= </span><span class="s4">'running'</span><span class="s3">;</span>
    <span class="s3">}</span>
    <span class="s0">animationRunning </span><span class="s3">= !</span><span class="s0">animationRunning</span><span class="s3">;</span>
<span class="s3">}</span>

<span class="s1">// music note animation toggle</span>



<span class="s1">// song toggle</span>

<span class="s2">var </span><span class="s0">x </span><span class="s3">= </span><span class="s0">document</span><span class="s3">.</span><span class="s0">getElementById</span><span class="s3">(</span><span class="s4">&quot;song&quot;</span><span class="s3">);</span>
<span class="s2">var </span><span class="s0">playing </span><span class="s3">= </span><span class="s2">false</span><span class="s3">;</span>

<span class="s2">function </span><span class="s0">toggleAudio</span><span class="s3">() {</span>
    <span class="s2">if </span><span class="s3">(</span><span class="s0">playing</span><span class="s3">) {</span>
        <span class="s0">x</span><span class="s3">.</span><span class="s0">pause</span><span class="s3">() }</span>
    <span class="s2">else </span><span class="s3">{</span>
        <span class="s0">x</span><span class="s3">.</span><span class="s0">play</span><span class="s3">();</span>
    <span class="s3">}</span>
<span class="s3">};</span>

<span class="s0">x</span><span class="s3">.</span><span class="s0">onplaying </span><span class="s3">= </span><span class="s2">function</span><span class="s3">() {</span>
    <span class="s0">playing </span><span class="s3">= </span><span class="s2">true</span><span class="s3">;</span>
<span class="s3">};</span>

<span class="s0">x</span><span class="s3">.</span><span class="s0">onpause </span><span class="s3">= </span><span class="s2">function</span><span class="s3">() {</span>
    <span class="s0">playing </span><span class="s3">= </span><span class="s2">false</span><span class="s3">;</span>
<span class="s3">};</span>



</pre>
</body>
</html>
