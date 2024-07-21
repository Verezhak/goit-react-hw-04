

import React, { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from '../services/api';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './ImageModal/ImageModal';


export const App = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!query) return;
        const getImages = async () => {
            try {
                setIsLoading(true);
                setError(false);
                const res = await fetchData(query, page);
                setResults(prev => [...prev, ...res.results]);
                setIsLoadMore(false);
                if (page < res.total_pages) {
                    setIsLoadMore(true);
                }
            } catch (error) {
                setError(true);
                setIsLoadMore(false);
            } finally {
                setIsLoading(false);
            }
        };
        getImages();

    }, [query, page]);
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };
    const handleSetQuery = query => {
        setQuery(query);
        setResults([]);
        setPage(1);
    }


    const handleImageClick = image => {
        setSelectedImage(image);

    };

    const closeModal = () => {
        setSelectedImage(null);

    };

    return (
        <>
            <SearchBar setQuery={handleSetQuery} />
            {error && <ErrorMessage />}
            <ImageGallery images={results} onImageClick={handleImageClick} />
            {isLoading && <Loader />}
            {isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
            {selectedImage && (
                <ImageModal image={selectedImage} onClose={closeModal} />
            )}
        </>
    )

}








