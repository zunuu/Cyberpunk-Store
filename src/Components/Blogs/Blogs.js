import React from 'react';
import '../Blogs/Blog.css'
const Blogs = () => {
    return (
        <section className='container-fluid mt-5 p-3'>
            <div className='context p-5 mt-3'>
                <h2>
                    What is context API?What is the purpose of context API?
                </h2>
                <p className='px-5'>
                    In react, when we want to send data or show data. we have to drill every step from our initial postion to the targeted position.Just like a reverse way of chain of command,there is no such an option to skip any child component,in order to resolve this problem/complexities we can use context API component which is able to send or provide data to anywhere from parent component without drilling and sending props to all child components.
                    like a radio signal, where we don't have to depend on any further wire connection.That means Context API is a way to produce a global variable so that it could be used anywhere in the code
                </p>
            </div>


            <div className='semantic p-5 mt-3'>
                <h2>
                    What is Semantic tag?
                </h2>
                <p className='px-5'>
                    In modern html/HTML5 we can get semantic tags.Basically it's a concepts and bunches of new tag which helps to broom our messy old and traditional html. As for example, on the previous days we used Div div div and div to create a new block as a major article container, hence html5 arrives with some tags which have same capability and invidual meaning to use,individual way to use.which are called semantic tags.Like when we used div or h<sub>(1-6)</sub> to make header of a html document, now we can write our code in {'<Header>'} tag . by adding semantic tags, a website become SEO friendly as well as it is readbable to both human and machine {'<Article>,<nav>,<footer>,<main>,<section>'} are some semantic tags
                </p>
            </div>


            <div className='elements p-5 mt-3'>
                <h2>
                    What are the Differences between Inline, Block and Inline-Block Elements?
                </h2>
                <p className='px-5'>
                    in inline element height, width can't be set but it is possible in inline-block and block elements.In inline-block elements: each element take same proportional width. But block element takes a whole line, where inline element have no any width issue, it takes width how much it's inner element or content need.elements in inline-block states in a series block but in block these states parallelly. where inline elements states in queue,side by side.BLock and inline-block elements force to create a new line for further elements belows them but inline elements don't force.{'<p>,<div>'} h <sub>(1-6)</sub> are block elements, {'<span>, <small> '} are inline elements
                </p>
            </div>
        </section>
    );
};

export default Blogs;