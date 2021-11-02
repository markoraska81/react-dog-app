import React, { useState, useEffect, useContext } from 'react';
import './BreedsPage.scss';
import axios from 'axios';
import Title from '../../components/Title/Title';
import SelectForm from '../../components/SelectForm/SelectForm';
import Breeds from '../../components/Breeds/Breeds';
import Modal from '../../components/Modal/Modal';
import { GlobalContext } from '../../context/GlobalContext';

const BreedsPage = () => {
  const { modal, setModal, modalImg, setModalImg, loading, setLoading } =
    useContext(GlobalContext);
  const [breedsImg, setBreedsImg] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher');
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetchSelectList();
    fetchBreedsImg();
  }, [selectedBreed]);

  // FETCH ALL NAME BREEDS
  const fetchSelectList = async () => {
    let url = 'https://dog.ceo/api/breeds/list/all';
    const res = await axios(url);
    const data = Object.keys(res.data.message);
    setSelectList(data);
  };

  // FETCH BREEDS IMG
  const fetchBreedsImg = async () => {
    setLoading(true);
    let url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
    const res = await axios(url);
    const data = res.data.message;
    let newItem = [];
    data.forEach((item, index) => {
      const singleItem = { img: item, id: index + 1 };
      newItem = [...newItem, singleItem];
    });
    setBreedsImg(newItem);
    setLoading(false);
    setLimit(20);
  };

  // FIND ITEM USING ID
  const getItem = (id) => {
    const item = breedsImg.find((item) => item.id === id);
    return item;
  };

  // HANDLE  CHANGE
  const handleChange = (e) => {
    setSelectedBreed(e.target.value);
    console.log(e.target.value);
  };

  // HANDLE MODAL
  const handleModal = (id) => {
    const item = getItem(id);
    setModalImg(item);
  };

  // OPEN, CLOSE MODAL
  const openModal = (id) => {
    const item = getItem(id);
    setModalImg(item);
    setModal(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setModal(false);
  };

  // LOAD MORE
  const loadMore = () => {
    setLimit(limit + 20);
  };

  return (
    <>
      <section className="breeds">
        <div className="breeds-heading">
          <Title title="Breeds dog" />
          <SelectForm selectList={selectList} handleChange={handleChange} />
        </div>
        <div className="breeds-body">
          <Breeds
            imgs={breedsImg}
            setModal={setModal}
            setModalImg={setModalImg}
            openModal={openModal}
            handleModal={handleModal}
            loading={loading}
            limit={limit}
            loadMore={loadMore}
          />
        </div>
        <Modal modal={modal} setModal={setModal} setModalImg={setModalImg}>
          <img src={modalImg.img} alt="Modal Img" />
          <div className="modal-body">
            <p>Breeds image</p>
            <p className="close">
              <i className="far fa-window-close" onClick={closeModal}></i>
            </p>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default BreedsPage;
