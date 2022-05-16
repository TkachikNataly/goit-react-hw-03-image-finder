import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
    state = {
        pictureName: '',
    };

    handleChange = e => {
        this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        if (this.state.pictureName.trim() === '') {
            return toast.error('Введіть назву картинки');
        }
        this.props.onSubmit(this.state.pictureName);
        this.setState({ pictureName: '' });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                {/* <div className={s.Ukraina}>
                    <div className={s.Ukraina}>
                        <img width="199" height="50" srcset="../../img/Ukraina.jpg" alt="Логотип" />
                    </div> */}
                <form className={s.SearchForm} onSubmit={this.handleOnSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        placeholder="Search images and photos"
                        value={this.state.pictureName}
                        onChange={this.handleChange}
                    />
                </form>
                {/* </div> */}
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};