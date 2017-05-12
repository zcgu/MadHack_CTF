# s = 'xipak-comok-repuk-vanik-dytuk-dimyk-sinyx'
# lst = list(s)


# for offset in range(26):
#     lst2 = []
#     for c in lst:
#         if (c == '-'):
#             lst2.append(c)
#             continue

#         c2 = chr(ord(c) + offset)
#         if ord(c2) > ord('z'):
#             c2 = chr(ord(c2) - 26)
#         lst2.append(c2)
#     print "".join(lst2)



# #RU9CRC43aWdxNDsxaWtiNTFpYk9PMDs6NDFS

# import paramiko
# ssh = paramiko.SSHClient()
# ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
# ssh.connect('ringzer0team.com', username='sudoku', password='dg43zz6R0E', port=12643)
# ssh_stdin, ssh_stdout, ssh_stderr = ssh.exec_command('ls /tmp')

# print ssh_stderr.read()



def findNextCellToFill(grid, i, j):
            for x in range(i,9):
                    for y in range(j,9):
                            if grid[x][y] == 0:
                                    return x,y
            for x in range(0,9):
                    for y in range(0,9):
                            if grid[x][y] == 0:
                                    return x,y
            return -1,-1

def isValid(grid, i, j, e):
        rowOk = all([e != grid[i][x] for x in range(9)])
        if rowOk:
                columnOk = all([e != grid[x][j] for x in range(9)])
                if columnOk:
                        # finding the top left x,y co-ordinates of the section containing the i,j cell
                        secTopX, secTopY = 3 *(i/3), 3 *(j/3)
                        for x in range(secTopX, secTopX+3):
                                for y in range(secTopY, secTopY+3):
                                        if grid[x][y] == e:
                                                return False
                        return True
        return False

def solveSudoku(grid, i=0, j=0):
        i,j = findNextCellToFill(grid, i, j)
        if i == -1:
                return True
        for e in range(1,10):
                if isValid(grid,i,j,e):
                        grid[i][j] = e
                        if solveSudoku(grid, i, j):
                                return True
                        # Undo the current cell for backtracking
                        grid[i][j] = 0
        return False



def parse():
    lst = []

    with open('test.txt') as f:
        for line in f:
            tmp = []

            if not line.startswith('|'):
                continue

            line = line.strip('\n');
            # print list(line)
            # break
            for i in range(2, len(line), 4):
                if line[i] == ' ':
                    tmp.append(0)
                else:
                    tmp.append(int(line[i]))
            lst.append(tmp)

    return lst





input = parse()

solveSudoku(input)

# print input

res = []
for l1 in input:
    for l2 in l1:
        res.append(str(l2))

print ",".join(res)




