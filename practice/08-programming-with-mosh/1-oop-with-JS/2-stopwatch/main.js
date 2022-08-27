function Stopwatch() {
    let startTime, endTime, running = false, duration = 0

    // this.start = function () {
    //     if (running) {
    //         throw new error('Stopwatch has already started.')
    //     }

    //     running = true
    //     startTime = new Date()
    // }

    // this.stop = function () {
    //     if (!running) {
    //         throw new error('Stopwatch is not started.')
    //     }

    //     running = false
    //     endTime = new Date()

    //     const seconds = (endTime.getTime() - startTime.getTime()) / 1000
    //     duration += seconds
    // }

    // this.reset = function () {
    //     startTime = null
    //     endTime = null
    //     running = false
    //     duration = 0
    // }

    Object.defineProperty(this, 'duration', {
        get: function () { return duration }
    })

    Object.defineProperty(this, 'start', {
        get: function () {
            if (running) {
                throw new Error('Stopwatch has already started.')
            }

            running = true
            startTime = new Date()
        }
    })

    Object.defineProperty(this, 'stop', {
        get: function () {
            if(!running) {
                throw new Error('Stopwatch is not started.')
            }

            running = false
            endTime = new Date()

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000
            duration += seconds
        }
    })

    Object.defineProperty(this, 'reset', {
        get: function () {
            startTime = null
            endTime = null
            running = false
            duration = 0
        }
    })
}

const sw = new Stopwatch()