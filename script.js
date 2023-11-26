function fibonacci(num) {
// your code here
	let fib = [0,1];
	if(num ==1)
		return 0;
	else if (n==2)
		return 1;
	for(let i=0;i<num-2;i++)
		{
			fib.push(fib[fib.length-1]+fib[fib.length-2]);
		}
	return fib[fib.length-1];
}

module.exports = fibonacci;
