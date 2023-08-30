// void snake_main() {
//   if (WEXITSTATUS(system("stty cbreak -echo stop u"))) {
//     fprintf(stderr, "Failed setting up the screen, is 'stty' missing?\n");
//     return 1;
//   }
// }

#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <unistd.h>

int snake_main() {
  int status = system("stty cbreak -echo stop u");

  if (WIFEXITED(status)) {
    int exit_status = WEXITSTATUS(status);
    if (exit_status != 0) {
      fprintf(stderr, "Failed setting up the screen, is 'stty' missing?\n");
      return 1;
    }
  } else {
    fprintf(stderr, "Failed running 'stty' command.\n");
    return 1;
  }

  // The rest of your snake game code can go here.

  return 0; // Return 0 to indicate success.
}

int main() {
  int result = snake_main();
  if (result != 0) {
    // Handle error here.
    return 1;
  }

  // Continue with your game logic.

  return 0;
}
