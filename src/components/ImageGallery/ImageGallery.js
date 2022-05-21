import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
// import fetchImages from 'Api/api';

function ImageGallery({
    images,
    onClickImg,
    pictureName,
    showLoad,
    page,
    showlargImage,
    togleModal,
    scrollOnLoadButton,
}) {
    //   console.log({ showLoad });
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webUrl }) => (
                <ImageGalleryItem
                    key={id}
                    onClickImg={onClickImg}
                    URL={webUrl}
                    // pictureName={pictureName}
                    // showButton={showLoad}
                    // page={page}
                    // showlargImage={showlargImage}
                    togleModal={togleModal}
                // scrollOnLoadButton={scrollOnLoadButton}
                />
            ))}
        </ul>
    );
};
ImageGallery.propTypes = {
    // showLoad: PropTypes.func.isRequired,
    // showlargImage: PropTypes.func.isRequired,
    onClickImg: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    togleModal: PropTypes.func.isRequired,
    // scrollOnLoadButton: PropTypes.func.isRequired,
    // page: PropTypes.number.isRequired,
    // pictureName: PropTypes.string.isRequired,
};
export default ImageGallery;