import React from "react"

const Blog = (props) => <div className="container-fluid p-5 mb-5 blog">
    <div className="container">
        <div className="row p-5 text-center">
            <h1>Blog our latest news</h1>
            <p>Have you ever browsed a food blog like mine and wondered how to start a food blog of your very own?</p>
        </div>
        <div className="row">
        {props.children}
        </div>
    </div>

</div>
export default Blog