class request {
  private queue: Promise<any>[];
  private pending: Promise<any>[];
  private count: number;
  constructor(count: number) {
    this.queue = [];
    this.pending = [];
    this.count = count;
  }

  public send(task: Promise<any>) {
    if (this.queue.length < this.count) {
      this.queue.push(task);
      this.execute(task);
    } else {
      this.pending.push(task);
    }
  }

  private execute(task: Promise<any>) {}
}
