import './title.css';


export default function Title(props){
        const title= props.title;

    return(
        <>
        <h1 className='title'>{title}</h1>
        </>
    );
}