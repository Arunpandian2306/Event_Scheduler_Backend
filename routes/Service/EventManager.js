class EventManager {
    constructor() {
      this.events = []; 
    }
  
    addEvent(date, startHour, endHour) {
      const newEvent = { date, startHour, endHour };
      for (const event of this.events) {
        if (event.date === date && this.isOverlapping(event, newEvent)) {
          return false; 
        }
      }
      this.events.push(newEvent);
      return true; 
    }
  
    isOverlapping(event1, event2) {
      return (
        (event1.startHour < event2.endHour && event1.endHour > event2.startHour)
      );
    }
    getEvents() {
      return this.events.map(event => ({
        date: event.date,
        start_time: event.startHour,
        end_time: event.endHour
      }));
    }

    deleteEvent(date, startHour, endHour) {
    const index = this.events.findIndex(
      event =>
        event.date === date &&
        event.startHour === startHour &&
        event.endHour === endHour
    );

    if (index !== -1) {
      this.events.splice(index, 1);
      return true;
    }
    return false;
  }
  }
  
  module.exports = EventManager;
  
