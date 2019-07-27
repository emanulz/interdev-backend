import csv


def main():
    print("MYSQL HAMMER")

    base_path = r"D:\Users\thor0\Desktop\COTOCO"
    print("BASE PATH --> ", base_path)
    departments_source = base_path + r"\department.csv"
    subdepartments_source = base_path + r"\subdepartment.csv"
    activities_source = base_path + r"\activity.csv"
    products_source = base_path + r"\product.csv"


    print(departments_source)

    dep_lines = read_lines(departments_source)
    getDepartmentMYSQL(dep_lines, 'new_schema')

    sub_dep_lines = read_lines(subdepartments_source)
    getSubDepartmentMYSQL(sub_dep_lines, 'new_schema')

    activities_lines = read_lines(activities_source)
    getActivitiesMYSQL(activities_lines, 'new_schema')

    products_lines = read_lines(products_source)
    getProductsMYSQL(products_lines, 'new_schema')


    
def read_lines(file_path):

    postgress_commands = []

    with open(file_path) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        line_count = 0
        for row in csv_reader:
            postgress_commands.append(row)
            line_count += 1

    return postgress_commands
    

def getDepartmentMYSQL(lines, db_name="coto_import", re_insertion_count=1000):
    table_name = 'products_productdepartment'
    INSERT_HEADER = 'INSERT INTO {}.{} (id, productdepartment_name, productdepartment_code) VALUES\n'.format(db_name, table_name)
    #HOLD MYSQL QUERY LINES
    mysql_lines = []
    counter = 0
    for line in lines:
        #do reinsertions every so many lines
        if counter % re_insertion_count == 0:
            mysql_lines.append(INSERT_HEADER)
        # print("Line --> ", line)
        mysql_lines.append(
            "('{}','{}', '{}'),\n".format(line[0], line[1], line[2])
        )
        counter += 1

    last_line = mysql_lines[-1]
    #check that the last line does not end in comma
    if last_line[-2] == ",":
        mysql_lines[-1] = last_line[:-2]

    if last_line.startswith("INSERT INTO"):
        mysql_lines.pop()


    #write mysql to file
    file_name = "{}_{}.sql".format(db_name, table_name)
    with open(file_name, 'w', encoding='utf-8') as mysql_dump:
        mysql_dump.writelines(mysql_lines)

    print("Department import .mysql Generated")

def getSubDepartmentMYSQL(lines, db_name="coto_import", re_insertion_count=1000):
    table_name = 'products_productsubdepartment'
    INSERT_HEADER = 'INSERT INTO {}.{} (id, productsubdepartment_name, productsubdepartment_code, productsubdepartment_department_id) VALUES\n'.format(db_name, table_name)
    #HOLD MYSQL QUERY LINES
    mysql_lines = []
    counter = 0
    for line in lines:
        #do reinsertions every so many lines
        if counter % re_insertion_count == 0:
            mysql_lines.append(INSERT_HEADER)
        # print("Line --> ", line)
        mysql_lines.append(
            "('{}','{}', '{}', '{}'),\n".format(line[0], line[1], line[2], line[3])
        )
        counter += 1

    last_line = mysql_lines[-1]
    #check that the last line does not end in comma
    if last_line[-2] == ",":
        mysql_lines[-1] = last_line[:-2]

    if last_line.startswith("INSERT INTO"):
        mysql_lines.pop()


    #write mysql to file
    file_name = "{}_{}.sql".format(db_name, table_name)
    with open(file_name, 'w', encoding='utf-8') as mysql_dump:
        mysql_dump.writelines(mysql_lines)

    print("Subdepartment import .mysql Generated")

def getActivitiesMYSQL(lines, db_name="coto_import", re_insertion_count=1000):
    table_name = 'activities_activity'
    INSERT_HEADER = 'INSERT INTO {}.{} (id, activity_name, activity_description) VALUES\n'.format(db_name, table_name)
    #HOLD MYSQL QUERY LINES
    mysql_lines = []
    counter = 0
    for line in lines:
        #do reinsertions every so many lines
        if counter % re_insertion_count == 0:
            mysql_lines.append(INSERT_HEADER)
        # print("Line --> ", line)
        mysql_lines.append(
            "('{}','{}', '{}'),\n".format(line[0], line[1], line[2])
        )
        counter += 1

    last_line = mysql_lines[-1]
    #check that the last line does not end in comma
    if last_line[-2] == ",":
        mysql_lines[-1] = last_line[:-2]

    if last_line.startswith("INSERT INTO"):
        mysql_lines.pop()


    #write mysql to file
    file_name = "{}_{}.sql".format(db_name, table_name)
    with open(file_name, 'w', encoding='utf-8') as mysql_dump:
        mysql_dump.writelines(mysql_lines)

    print("Activities import .mysql Generated")

def getProductsMYSQL(lines, db_name="coto_import", re_insertion_count=1000):
    #Lines that contain t for True need to be swapped by 1

    table_name = 'products_product'
    INSERT_HEADER = 'INSERT INTO {}.{} (id, product_code, product_consecutive, product_description, product_price, product_unit, product_usetaxes, product_taxes, product_department_id, product_subdepartment_id, product_discount) VALUES\n'.format(db_name, table_name)
    #HOLD MYSQL QUERY LINES
    truety_indexes = [6]
    cleaned_lines = []
    for line in lines:
        for index in truety_indexes:
            if line[index] == "t":
                line[index] = 1
            else:
                line[index] = 0
        #clean ' from descriptions
        line[3] = line[3].replace("'", "")
        cleaned_lines.append(line)

    mysql_lines = []
    counter = 0
    for line in cleaned_lines:
        #do reinsertions every so many lines
        if counter % re_insertion_count == 0:
            mysql_lines.append(INSERT_HEADER)
            #end in ; previous line
            if counter > 0:
                tweaked = list(mysql_lines[counter])
                tweaked[-2] = ";"
                # print("Tweaked --> ", tweaked)
                mysql_lines[counter] = "".join(tweaked)
                counter += 1
        # print("Line --> ", line)
        mysql_lines.append(
            "('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}'),\n".format(line[0], line[1], line[2], line[3], line[4], line[5], line[6], line[7], line[8], line[9], line[10])
        )
        counter += 1

    last_line = mysql_lines[-1]
    #check that the last line does not end in comma
    if last_line[-2] == ",":
        mysql_lines[-1] = last_line[:-2]

    if last_line.startswith("INSERT INTO"):
        mysql_lines.pop()


    #write mysql to file
    file_name = "{}_{}.sql".format(db_name, table_name)
    with open(file_name, 'w', encoding='utf-8') as mysql_dump:
        mysql_dump.writelines(mysql_lines)

    print("Products import .mysql Generated")

if __name__ =="__main__":
    main()