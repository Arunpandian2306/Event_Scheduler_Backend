# Event Scheduler

- **Create Events**:
- Users can select a date and specify the start and end times for their events.
- Date Default show Present Date
- Past Date Cannot be Accessable
- But Future Date Can Accessable
  
- **Validation**:
- The application checks for overlapping events, providing feedback to users if the selected time conflicts with existing ones.

- **Event List**:
- It Shows the list of event in a table with a Scroll Bar
- Where Past Event is Blur or Hightlite as red
  
- **Responsive Design**:
- The UI is designed to be simple and easy to navigate, allowing users to quickly add new events.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js (Express)
- **Styling**: CSS 
- **Axios**: For making HTTP requests to the backend API
- **To-Build**: Docker
- **API-Testing**: Postman
  
## Installation & Setup

- Requirement
•	node version 18
•	docker

1. **Backend Setup**

  ```bash
   git clone https://github.com/Arunpandian2306/Event_Scheduler_Backend.git
   docker-compose up --build
```
  
2. **Frontend Setup**

   ```bash
   git clone https://github.com/Arunpandian2306/Event_Scheduler_Frontend.git
   docker-compose up --build

3. **Open your browser and navigate to**
`http://localhost:5173` 

