from django.shortcuts import render

def index(request):
	return render(request, 'main/index.html')

def pack(request):
	return render(request, 'main/pack.html')

def music(request):
	return render(request, 'main/music.html')

def about(request):
	return render(request, 'main/about.html')

def portfolio(request):
	return render(request, 'main/portfolio.html')