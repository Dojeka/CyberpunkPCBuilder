document.addEventListener('DOMContentLoaded', function() {
    const builderPage = document.getElementById("openBuilder")
    const partsPage = document.getElementById("openParts")
    const compatibilityPage = document.getElementById("openCompatibility")
    const benchmarkPage = document.getElementById("openBenchmark")
    const buildsPage = document.getElementById("openBuilds")

    builderPage.addEventListener('click', function() {
        window.location.href = "builderpage.html"
    })

    partsPage.addEventListener('click', function() {
        window.location.href = "partspage.html"
    })

    compatibilityPage.addEventListener('click', function () {
        window.location.href = "compatibilitypage.html"
    })

    benchmarkPage.addEventListener('click', function() {
        window.location.href = "benchmarkpage.html"
    })

    buildsPage.addEventListener('click', function() {
        window.location.href = "buildsPage.html"
    })
})