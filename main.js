class Progress {
  constructor (id, opts = {barColor: 'red', backgroundColor: '#333', percent: 0}) {  
    this.percent = opts.percent
    this.opts = opts
    this.container = document.getElementById(id)
    this.render()
  }

  render () {
    return ''
  }

  update (percent) {
    this.percent = percent
    this.container.innerHTML = this.render()
  }

  getPercentage () {
    return this.percent
  }
}

class ProgressBar extends Progress {
  render () {
    const container = this.container
    const progressBarT = `
      <div class="progress-bar" style="background-color: ${this.opts.backgroundColor}">
        <div class="progress-bar-inner" style="width: ${this.percent * 100}%; background-color: ${this.opts.barColor}"></div>
      </div>
    `.trim()
    return progressBarT
  }
}

class ProgressCircle extends Progress {
  render () {
    const progressCircleT = `
    <svg class="progress-circle" xmlns="http://www.w3.org/2000/svg">
      <circle class="circle" cx="50%" cy="50%" r="40%" stroke-width="10%" stroke-dashoffset="${(1 - this.percent) * 255}%" stroke="#6FEC6F"></circle>
    </svg>
    `.trim()
    return progressCircleT
  }
}

class ProgressTriangle extends Progress {
  render () {
    const progressTriangle = `
    <div class="progress-triangle-container">
      <div class="progress-triangle" style="border-color: ${this.opts.backgroundColor} transparent ${this.opts.backgroundColor} transparent"></div>
      <div class="progress-triangle-inner" style = "border-width: ${50 * this.percent}px; border-color: ${this.opts.barColor} transparent ${this.opts.barColor} transparent"></div>
    </div>
    `.trim()
    return progressTriangle
  }
}
