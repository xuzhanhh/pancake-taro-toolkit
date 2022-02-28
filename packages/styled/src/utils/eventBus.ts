type Params = any[]
type Listener = (...args: Params) => void

interface EventBusInterface {
  emit: (type: string, ...args: Params) => void
  addListener: (type: string, listener: Listener) => void
  removeListener: (type: string, listener: Listener) => void
}

class EventBus implements EventBusInterface {
  public events: Record<string, Listener[]> = {}

  addListener(type: string, listener: Listener) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    // push unique listener
    if (!this.events[type].includes(listener)) {
      this.events[type].push(listener)
    }
  }

  removeListener(type: string, listener: Listener) {
    if (!this.events[type]) {
      return
    }
    const index = this.events[type].indexOf(listener)
    if (index > -1) {
      this.events[type].splice(index, 1)
    }
  }

  emit(type: string, ...args: Params) {
    if (!this.events[type]) {
      return
    }
    this.events[type].forEach((listener) => listener.apply(null, args))
  }
}

const eventBus = new EventBus()

export default eventBus
