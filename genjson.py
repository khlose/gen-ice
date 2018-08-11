def main():
	modelname = raw_input("Model Name: ")
	basemodel = raw_input("Is it a base model?")

	if basemodel.lower() == "true" or basemodel.lower() == "yes" or basemodel.lower() == "y":
		basemodel = True
	else:
		basemodel = False

	daily_elec_u = raw_input("daily electricity usage in unit: ")

	daily_water_u = raw_input("daily water usage in unit: ")

	family =" []"
	dimension = "\"" + raw_input("Dimension: ") + "\""
	
	icetype = raw_input("ice type (cube/flake/crescent):")
	icetypestring = "\"\""
	if icetype.lower() == "cube":
		icetypeurl = "\"../images/square-20.png\""
	elif icetype.lower() == "flake":
		icetypeurl = "\"../images/flake-20.png\""
	else:
		icetypeurl = "\"\""
		
	imageurl = raw_input("thumbnail file name: ")
	imageurl = "\"../images/models/thumb/" + imageurl + "\""

	power = raw_input("power: ")
	power = "\""+power+"\""

	price = raw_input("price: ")

	production_upper = raw_input("Max Production: ")
	production_lower = raw_input("Min Production: ")
	production_range = "\""+production_lower + "-" + production_upper + "\""
	production = str((int(production_upper) + int(production_lower)) / 2)
	
	isShowcase = raw_input("Show case this model?: (y/n)")
	if isShowcase.lower() == "true" or isShowcase.lower() == "yes" or isShowcase.lower() == "y":
		isShowcase = True
	else:
		isShowcase = False

	storage = "\"" + raw_input("storage: ") + "\""
	weight = "\"" + raw_input("weight: ") + "\""

	specsheet = "\"../images/models/specsheet/" + raw_input("specsheet file name: ") +"\""

	wideimageurl = "\"../images/models/thumb/" + raw_input("wide image file name: ") + "\""

	generated_json = "\""+modelname + "\":{" + "\"basemodel\":" + str(basemodel) + ",\n" + "\"daily_elec_unit\":" + daily_elec_u + ",\n" + "\"daily_water_unit\":" +daily_water_u + ",\n" + "\"description\" : \"N/A\",\n" +"\"dimension\":" + dimension + ",\n" +"\"family\" : [],\n" +"\"iceiconurl\" : " + icetypeurl +",\n" +"\"icetype\" : \"\",\n" +"\"imageurl\" : " + imageurl +",\n" +"\"model\" : " + "\"" + modelname + "\",\n" +"\"power\" : " + power 
	generated_json += ",\n"+"\"price\" : " + price +",\n"+"\"production\" : " + production +",\n" +"\"production_range\" : " + production_range + ",\n" + "\"showcase\" : " + str(isShowcase) +",\n" +"\"specurl\" : " + specsheet + ",\n" + "\"storage\" : " + storage +",\n" + "\"weight\" : " + weight + ",\n" +"\"wideimageurl\" : " + wideimageurl + "\n"+ "}"
	

	print(generated_json)



if __name__== "__main__":
	main()
