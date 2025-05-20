import { inputStore } from './index';

describe('InputStore', () => {
  beforeEach(() => {
    inputStore.setTaskBucket([]);
    inputStore.resetInput();
    inputStore.setError('');
    localStorage.clear();
  });

  describe('addTask', () => {
    it('should add a task when input is valid', () => {

      const taskName = 'Test Task';
      inputStore.setInput(taskName);

      inputStore.addTask();

      expect(inputStore.taskBucket).toHaveLength(1);
      expect(inputStore.taskBucket[0].taskName).toBe(taskName);
      expect(inputStore.taskBucket[0].taskId).toBeDefined();
      expect(inputStore.getInput()).toBe('');
      expect(inputStore.errorMessage).toBe('');
    });

    it('should not add a task when input is empty', () => {
      inputStore.setInput('');

      inputStore.addTask();

      expect(inputStore.taskBucket).toHaveLength(0);
      expect(inputStore.errorMessage).toBe('Please enter a task');
    });

    it('should not add a task when input is only whitespace', () => {
      inputStore.setInput('   ');

      inputStore.addTask();

      expect(inputStore.taskBucket).toHaveLength(0);
      expect(inputStore.errorMessage).toBe('Please enter a task');
    });

    it('should trim whitespace from task name', () => {
      inputStore.setInput('  Test Task  ');

      inputStore.addTask();

      expect(inputStore.taskBucket).toHaveLength(1);
      expect(inputStore.taskBucket[0].taskName).toBe('Test Task');
    });

    it('should persist task to localStorage', () => {
      const taskName = 'Test Task';
      inputStore.setInput(taskName);

      inputStore.addTask();

      const storedTasks = JSON.parse(localStorage.getItem('dayTrackerTasks') || '[]');
      expect(storedTasks).toHaveLength(1);
      expect(storedTasks[0].taskName).toBe(taskName);
    });
  });
}); 