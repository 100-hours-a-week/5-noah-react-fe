import './index.css';

const UserImage = ({
                       src,
                       alt,
                       width,
                       height,
                   }) => {
    return (<>
        <img className={'img-user-header'} src={src} alt={alt} width={width} height={height}/>
    </>);
};

export default UserImage;
