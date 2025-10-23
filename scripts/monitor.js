/**
 * ================================================================
 * DevOps Simulator - System Monitoring Script (Production)
 * Version: 1.1.0
 * Author: [Your Name]
 * Description: Monitors system health, application metrics, and alerts
 * ================================================================
 */

const monitorConfig = {
  interval: 60000, // 1 minute
  alertThreshold: 80, // e.g., CPU or memory usage above 80%
  metricsEndpoint: 'http://localhost:8080/metrics'
};

console.log('=========================================');
console.log('🚀 DevOps Simulator - System Monitor v1.1');
console.log('=========================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`\n🕒 [${timestamp}] Running health check...`);

  // Simulated metric checks (replace with real monitoring logic later)
  const cpuUsage = Math.floor(Math.random() * 100);
  const memoryUsage = Math.floor(Math.random() * 100);
  const diskUsage = Math.floor(Math.random() * 100);

  console.log(`🧠 CPU Usage: ${cpuUsage}%`);
  console.log(`💾 Memory Usage: ${memoryUsage}%`);
  console.log(`📀 Disk Usage: ${diskUsage}%`);

  // Basic health status check
  if (cpuUsage > monitorConfig.alertThreshold ||
      memoryUsage > monitorConfig.alertThreshold ||
      diskUsage > monitorConfig.alertThreshold) {
    console.log('⚠️ System Status: WARNING — Resource usage high!');
  } else {
    console.log('✅ System Status: HEALTHY');
  }
}

// Run first check immediately
checkSystemHealth();

// Schedule continuous monitoring
console.log(`\n🔁 Monitoring every ${monitorConfig.interval / 1000} seconds...`);
setInterval(checkSystemHealth, monitorConfig.interval);
