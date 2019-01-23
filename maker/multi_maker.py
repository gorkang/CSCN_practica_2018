import os, shutil

def main():
	PATH = os.getcwd()
	onlyfiles = [f for f in os.listdir(PATH + "/multi_maker") if os.path.isfile(os.path.join(PATH + "/multi_maker", f))]
	for file in onlyfiles:
		if not file.endswith(".yaml"):
			continue
		shutil.copyfile(PATH + "/multi_maker/" + file, PATH + "/data.yaml")
		os.system("python3 maker.py")

if __name__ == '__main__' : main()