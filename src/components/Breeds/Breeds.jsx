import React from 'react';
import './Breeds.scss';
import BreedsImg from '../BreedsImg/BreedsImg';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';

const Breeds = ({ openModal, handleModal, imgs, loading, limit, loadMore }) => {
  console.log(imgs.length, limit);
  return (
    <>
      {imgs.length === 0 ? (
        <div>no pictures for the dog breed</div>
      ) : loading ? (
        <Spinner />
      ) : (
        <>
          <div className="breeds-body__box">
            {imgs.slice(0, limit).map((item) => (
              <BreedsImg
                key={item.id}
                img={item.img}
                id={item.id}
                openModal={openModal}
                handleModal={handleModal}
              />
            ))}
          </div>
          <div className="breeds-body__btn">
            <Button
              type="load"
              display={limit >= imgs.length ? 'none' : 'inline-block'}
              onClick={loadMore}
            >
              Load more
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Breeds;
