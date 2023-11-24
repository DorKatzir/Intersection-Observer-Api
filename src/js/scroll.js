const header = document.getElementById('header')
const slide = document.getElementById('slide')

const slideOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
}

const slideObserver = new IntersectionObserver(function (entries, slideObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.className = 'navSlide'
        } else {
            header.className = ''
        }
    })
}, slideOptions)

slideObserver.observe(slide)
