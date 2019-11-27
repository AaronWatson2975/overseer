function validateIpAndPort(input: string): boolean {
  const parts = input.split(":");
  const ip = parts[0].split(".");
  const port = parts[1];
  return (
    validateNum(port, 1, 65535) &&
    ip.length == 4 &&
    ip.every(function(segment) {
      return validateNum(segment, 0, 255);
    })
  );
}

function fetchAddress(input: string) {
  return input.split(":")[0];
}

function validateNum(input: string, min: number, max: number): boolean {
  const num = +input;
  return num >= min && num <= max && input === num.toString();
}

export { fetchAddress, validateIpAndPort };
