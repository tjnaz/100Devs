void snake_main() {
  if (WEXITSTATUS(system("stty cbreak -echo stop u"))) {
    fprintf(stderr, "Failed setting up the screen, is 'stty' missing?\n");
    return 1;
  }
}
