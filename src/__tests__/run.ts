import { runValidationTests } from "./validation.test";
import { runRouteTests } from "./routes.test";
import { runModifierTests } from "./modifiers.test";
import { runGenerationTests } from "./generation.test";

let totalPassed = 0;
let totalFailed = 0;

function report(name: string, results: { passed: number; failed: number }) {
  console.log(`\n${"=".repeat(50)}`);
  console.log(`${name}: ${results.passed} passed, ${results.failed} failed`);
  totalPassed += results.passed;
  totalFailed += results.failed;
}

async function main() {
  console.log("🧪 Running all tests...\n");

  report("Validation", runValidationTests());
  report("Routes", runRouteTests());
  report("Modifiers", runModifierTests());
  report("Generation", await runGenerationTests());

  console.log(`\n${"=".repeat(50)}`);
  console.log(`\nTotal: ${totalPassed} passed, ${totalFailed} failed`);

  if (totalFailed > 0) {
    process.exit(1);
  }
  console.log("\n✅ All tests passed!");
}

main();
