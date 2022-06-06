
export async function getStaticPaths() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const res = await data.json();

    const paths = res.map(post => {
        return {
            params : { id : post.id.toString()}
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props : { post : data}
    }
}

const article = ({ post }) => {
    return (
        <>
        <p>{post.id}</p>
        <p>{post.body}</p>
        </>
    );
}
 
export default article;