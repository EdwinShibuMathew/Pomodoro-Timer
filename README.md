**Pomodoro Timer**

A simple web-based Pomodoro Timer built with HTML, CSS, and JavaScript. The timer visually represents a countdown inside an apple SVG, with controls to start, pause/resume, and stop/reset the timer. When less than one minute remains, the timer display changes to a red color with a black background for emphasis.

**Features**

- **25-minute Pomodoro countdown** (customizable in code)
- **Start, Pause/Resume, and Stop/Reset** buttons
- **Visual warning** when less than 1 minute remains
- **Responsive** and **visually appealing** apple SVG design

**How to Use**

1. **Clone or download** this repository.
2. Open `index.html` in your web browser.
3. Click **Start** to begin the timer.
4. Use **Pause** to pause and **Resume** to continue.
5. Click **Stop** to reset the timer to 25:00.

## Project Structure

```
Pomodoro-Timer/
├── index.html      # Main HTML file
├── styles.css      # Styling for layout and timer
└── script.js       # Timer logic and interactivity
```

**Customization**

- To change the Pomodoro duration, edit the `timeLeft` variable in `script.js`:
  ```js
  let timeLeft = 60 * 25; // 25 minutes in seconds
  ```

 **Credits**

Created by Edwin Shibu Mathew.  
Inspired by the Pomodoro productivity technique.

**License**

This project is open source and free to use.
