// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("trix")
require("@rails/actiontext")

import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('turbolinks:load', () => {
    const dataset = $('#article-show').data()
    const articleId = dataset.articleId
    axios.get(`/articles/${articleId}/like`)
        .then((response) => {
            const hasLiked = response.data.hasLiked
            if (hasLiked) {
                $('.active-heart').removeClass('hidden')
            } else {
                $('.inactive-heart').removeClass('hidden')
            }
        })
    $('.inactive-heart').on('click', () => {
        axios.post(`/articles/${articleId}/like`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $('.active-heart').removeClass('hidden')
                    $('.inactive-heart').addClass('hidden')
                }
            })
            .catch((e) => {
                window.alert('Error')
                console.log(e)
            })
    })

    $('.active-heart').on('click', () => {
        axios.delete(`/articles/${articleId}/like`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $('.active-heart').addClass('hidden')
                    $('.inactive-heart').removeClass('hidden')
                }
            })
            .catch((e) => {
                window.alert('Error')
                console.log(e)
            })
    })
})