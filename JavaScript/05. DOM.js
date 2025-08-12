// when a web browser loads, the browser creates a DOM

// Document
//     Root Element (HTML)
//         Head
//             Title---> Text : My Title

//         Body
//             a---> Text : My Link
//             h1---> Text : MyHeader


// --------------------------------------------------------------------- Documents -----------------------------------------------------------------------
// Finding HTML Elements

// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name // THis returns a HTML Collections
// document.getElementsByClassName(name)	Find elements by class name
// document.querySelectorAll("p.intro")  // This returns a nodelist



// Changing HTML Elements

// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element
// Method	Description
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element
// document.getElementById(id).style.property = new style



// Adding and Deleting Elements

// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream


// ------------------------------------------------------------------- Events -------------------------------------------------------

// onabort	The loading of a media is aborted	UiEvent, Event
// onafterprint	A page has started printing	Event
// onanimationend	A CSS animation has completed	AnimationEvent
// onanimationiteration	A CSS animation is repeated	AnimationEvent
// onanimationstart	A CSS animation has started	AnimationEvent
// onbeforeprint	A page is about to be printed	Event
// onbeforeunload	Before a document is about to be unloaded	UiEvent, Event
// onblur	An element loses focus	FocusEvent
// oncanplay	The browser can start playing a media (has buffered enough to begin)	Event
// oncanplaythrough	The browser can play through a media without stopping for buffering	Event
// onchange	The content of a form element has changed	Event
// onclick	An element is clicked on	MouseEvent
// oncontextmenu	An element is right-clicked to open a context menu	MouseEvent
// oncopy	The content of an element is copied	ClipboardEvent
// oncut	The content of an element is cut	ClipboardEvent
// ondblclick	An element is double-clicked	MouseEvent
// ondrag	An element is being dragged	DragEvent
// ondragend	Dragging of an element has ended	DragEvent
// ondragenter	A dragged element enters the drop target	DragEvent
// ondragleave	A dragged element leaves the drop target	DragEvent
// ondragover	A dragged element is over the drop target	DragEvent
// ondragstart	Dragging of an element has started	DragEvent
// ondrop	A dragged element is dropped on the target	DragEvent
// ondurationchange	The duration of a media is changed	Event
// onended	A media has reach the end ("thanks for listening")	Event
// onerror	An error has occurred while loading a file	ProgressEvent, UiEvent, Event
// onfocus	An element gets focus	FocusEvent
// onfocusin	An element is about to get focus	FocusEvent
// onfocusout	An element is about to lose focus	FocusEvent
// onfullscreenchange	An element is displayed in fullscreen mode	Event
// onfullscreenerror	An element can not be displayed in fullscreen mode	Event
// onhashchange	There has been changes to the anchor part of a URL	HashChangeEvent
// oninput	An element gets user input	InputEvent, Event
// oninvalid	An element is invalid	Event
// onkeydown	A key is down	KeyboardEvent
// onkeypress	A key is pressed	KeyboardEvent
// onkeyup	A key is released	KeyboardEvent
// onload	An object has loaded	UiEvent, Event
// onloadeddata	Media data is loaded	Event
// onloadedmetadata	Meta data (like dimensions and duration) are loaded	Event
// onloadstart	The browser starts looking for the specified media	ProgressEvent
// onmessage	A message is received through the event source	Event
// onmousedown	The mouse button is pressed over an element	MouseEvent
// onmouseenter	The pointer is moved onto an element	MouseEvent
// onmouseleave	The pointer is moved out of an element	MouseEvent
// onmousemove	The pointer is moved over an element	MouseEvent
// onmouseover	The pointer is moved onto an element	MouseEvent
// onmouseout	The pointer is moved out of an element	MouseEvent
// onmouseup	A user releases a mouse button over an element	MouseEvent
// onmousewheel	Deprecated. Use the wheel event instead	WheelEvent
// onoffline	The browser starts working offline	Event
// ononline	The browser starts working online	Event
// onopen	A connection with the event source is opened	Event
// onpagehide	User navigates away from a webpage	PageTransitionEvent
// onpageshow	User navigates to a webpage	PageTransitionEvent
// onpaste	Some content is pasted in an element	ClipboardEvent
// onpause	A media is paused	Event
// onplay	The media has started or is no longer paused	Event
// onplaying	The media is playing after being paused or buffered	Event
// onpopstate	The window's history changes	PopStateEvent
// onprogress	The browser is downloading media data	Event
// onratechange	The playing speed of a media is changed	Event
// onresize	The document view is resized	UiEvent, Event
// onreset	A form is reset	Event
// onscroll	An scrollbar is being scrolled	UiEvent, Event
// onsearch	Something is written in a search field	Event
// onseeked	Skipping to a media position is finished	Event
// onseeking	Skipping to a media position is started	Event
// onselect	User selects some text	UiEvent, Event
// onshow	A <menu> element is shown as a context menu	Event
// onstalled	The browser is trying to get unavailable media data	Event
// onstorage	A Web Storage area is updated	StorageEvent
// onsubmit	A form is submitted	Event
// onsuspend	The browser is intentionally not getting media data	Event
// ontimeupdate	The playing position has changed (the user moves to a different point in the media)	Event
// ontoggle	The user opens or closes the <details> element	Event
// ontouchcancel	The touch is interrupted	TouchEvent
// ontouchend	A finger is removed from a touch screen	TouchEvent
// ontouchmove	A finger is dragged across the screen	TouchEvent
// ontouchstart	A finger is placed on a touch screen	TouchEvent
// ontransitionend	A CSS transition has completed	TransitionEvent
// onunload	A page has unloaded	UiEvent, Event
// onvolumechange	The volume of a media is changed (includes muting)	Event
// onwaiting	A media is paused but is expected to resume (e.g. buffering)	Event
// onwheel	The mouse wheel rolls up or down over an element	WheelEvent



// ------------------------------------------------------------------- Event Listener --------------------------------------------------
// the third element (is belomgs to event Propogation) by default value is false : Bubling
// Make it true change the event Propogation to Capturing  
// document.getElementById("myP").addEventListener("click", myFunction, true);
// document.getElementById("myDiv").addEventListener("click", myFunction, true);

// Remove Event listner
// element.removeEventListener("mousemove", myFunction);


// // Navigating Between Nodes

// You can use the following node properties to navigate between nodes with JavaScript:
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
myTitle = document.getElementById("demo").firstChild.nodeValue;
myTitle = document.getElementById("demo").childNodes[0].nodeValue;
// nodeName property gives the name of the node(tag)
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;



// The Difference Between an HTMLCollection and a NodeList

// A NodeList and an HTMLcollection is very much the same thing.
// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
// Both have a length property that returns the number of elements in the list (collection).
// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.
// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
// The querySelectorAll() method returns a static NodeList.
// The childNodes property returns a live NodeList.



// Not an Array!

// A NodeList may look like an array, but it is not.
// You can loop through a NodeList and refer to its nodes by index.
// But, you cannot use Array methods like push(), pop(), or join() on a NodeList.